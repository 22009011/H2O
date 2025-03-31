import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="navbar">
          <div className="logo">FoodShare</div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="btn login-btn">Login</a>
          </nav>
        </div>
      </header>
      
      <section className="hero">
        <h1>Reducing Food Waste, Feeding Communities</h1>
        <p>Connect surplus food with those who need it most. Our platform brings together restaurants, hotels, delivery volunteers, and beneficiaries to make a difference.</p>
        <a href="#register" className="btn">Get Started</a>
      </section>
      
      <section className="features">
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>Our platform connects food donors with beneficiaries through a simple, efficient process</p>
        </div>
        
        <div className="cards">
          <div className="card">
            <div className="card-image">Food Donation</div>
            <div className="card-content">
              <h3>Donate Surplus Food</h3>
              <p>Restaurants and households can easily list their surplus food with details about quantity and pickup time.</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">Quality Verification</div>
            <div className="card-content">
              <h3>Safe Food Verification</h3>
              <p>Our social workers ensure that all food meets safety standards before it reaches beneficiaries.</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">Delivery</div>
            <div className="card-content">
              <h3>Efficient Delivery</h3>
              <p>Volunteer delivery personnel collect and deliver food to nearby beneficiaries, tracking progress in real-time.</p>
            </div>
          </div>
        </div>
        
        <div className="impact-stats">
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Meals Saved</div>
          </div>
          
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Partner Organizations</div>
          </div>
          
          <div className="stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Volunteers</div>
          </div>
        </div>
      </section>
      
      <section id="register" className="registration-section">
        <div className="section-heading">
          <h2>Join The Movement</h2>
          <p>Register based on your role and start making an impact today</p>
        </div>
        
        <div className="cards">
          <div className="card">
            <div className="card-image">Restaurant/Hotel Icon</div>
            <div className="card-content">
              <h3>Register as Food Donor</h3>
              <p>Restaurants, hotels, and households who want to donate surplus food</p>
              <a href="#" className="btn">Register as Donor</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">NGO Icon</div>
            <div className="card-content">
              <h3>Register as Beneficiary</h3>
              <p>NGOs, old age homes, orphanages that need food donations</p>
              <a href="#" className="btn">Register as Beneficiary</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">Delivery Icon</div>
            <div className="card-content">
              <h3>Join as Delivery Volunteer</h3>
              <p>Help collect and deliver food from donors to beneficiaries</p>
              <a href="#" className="btn">Register for Delivery</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">Social Worker Icon</div>
            <div className="card-content">
              <h3>Join as Social Worker</h3>
              <p>Help verify food quality and assist with logistics coordination</p>
              <a href="#" className="btn">Register as Social Worker</a>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image">Admin Icon</div>
            <div className="card-content">
              <h3>Register as Admin</h3>
              <p>System administrators who manage users and monitor platform activity</p>
              <a href="#" className="btn">Register as Admin</a>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2025 FoodShare - Food Waste Management System</p>
        <p>Making a difference, one meal at a time</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;