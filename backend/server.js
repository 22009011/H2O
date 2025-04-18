// server.js - Main server file
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'thanji830',
  database: 'food_donation_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log('Database connection established successfully!');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

// Authentication middleware (commented out)
/*
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, user) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};
*/

// Add this route to test token
/*
app.get('/api/verify-token', authenticateToken, (req, res) => {
  res.json({ 
    valid: true, 
    user: req.user 
  });
});
*/

// Routes
// POST - Create a new donation
app.post('/api/donations', upload.single('image'), async (req, res) => {
  try {
    const {
      foodType,
      description,
      quantity,
      unit,
      expiryDate,
      expiryTime,
      pickupStartDate,
      pickupStartTime,
      pickupEndDate,
      pickupEndTime,
      isRecurring,
      recurringFrequency,
      address,
      city,
      zipCode,
      specialInstructions
    } = req.body;
    
    // Combine date and time into datetime
    const expiryDatetime = `${expiryDate} ${expiryTime}`;
    const pickupStartDatetime = `${pickupStartDate} ${pickupStartTime}`;
    const pickupEndDatetime = `${pickupEndDate} ${pickupEndTime}`;

    // Get image URL if uploaded
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    
    // Convert string to boolean
    const recurring = isRecurring === 'true' || isRecurring === true;

    // Insert into database
    const [result] = await pool.execute(
      `INSERT INTO donations1 (
        food_type, description, quantity, unit, 
        image_url, expiry_datetime, pickup_start_datetime, 
        pickup_end_datetime, is_recurring, recurring_frequency,
        address, city, zip_code, special_instructions
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        foodType, description, quantity, unit,
        imageUrl, expiryDatetime, pickupStartDatetime,
        pickupEndDatetime, recurring, recurring ? recurringFrequency : null,
        address, city, zipCode, specialInstructions
      ]
    );
    
    const donationId = result.insertId;
    
    // If this is a recurring donation, create initial schedule
    if (recurring) {
      let nextDate = new Date(pickupStartDate);
      
      // Set next occurrence based on frequency
      switch (recurringFrequency) {
        case 'daily':
          nextDate.setDate(nextDate.getDate() + 1);
          break;
        case 'weekly':
          nextDate.setDate(nextDate.getDate() + 7);
          break;
        case 'biweekly':
          nextDate.setDate(nextDate.getDate() + 14);
          break;
        case 'monthly':
          nextDate.setMonth(nextDate.getMonth() + 1);
          break;
      }
      
      await pool.execute(
        'INSERT INTO recurring_schedules (donation_id, next_occurrence_date) VALUES (?, ?)',
        [donationId, nextDate.toISOString().split('T')[0]]
      );
    }
    
    res.status(201).json({
      success: true,
      donationId,
      message: 'Donation created successfully!'
    });
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create donation',
      error: error.message
    });
  }
});

// GET - Get all donations for a user
app.get('/api/donations', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM donations ORDER BY created_at DESC'
    );
    
    res.json({
      success: true,
      donations: rows
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch donations',
      error: error.message
    });
  }
});

// Other routes for updating, deleting donations...

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});