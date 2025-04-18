import React, { useState } from 'react';
import './DeliveryDashboard.css';
const DeliveryDashboard = () => {
  const [activeTab, setActiveTab] = useState('available');
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  // Sample data for available pickup requests
  const availableRequests = [
    { id: 1, donor: "Fresh Foods Market", foodType: "Fresh Produce", quantity: "15 kg", location: "123 Main St", distance: "2.3 km", time: "1:30 PM", description: "Vegetables and fruits that are still fresh but won't be sold today." },
    { id: 2, donor: "Daily Bakery", foodType: "Bread & Pastries", quantity: "8 boxes", location: "45 Oak Avenue", distance: "3.7 km", time: "2:00 PM", description: "Day-old bread and pastries in good condition." },
    { id: 3, donor: "Green Grocers", foodType: "Mixed Items", quantity: "10 kg", location: "78 Pine Road", distance: "1.8 km", time: "3:30 PM", description: "Assorted fruits, vegetables, and packaged goods." }
  ];
  
  // Sample data for accepted/in-progress requests
  const activeRequests = [
    { id: 4, donor: "City Supermarket", foodType: "Packaged Foods", quantity: "5 boxes", status: "Accepted", location: "210 River St", beneficiary: "Hope Community Center", beneficiaryLocation: "330 Church Ave" }
  ];
  
  // Sample data for completed deliveries
  const completedDeliveries = [
    { id: 5, donor: "Morning Bakery", foodType: "Bread & Pastries", quantity: "6 boxes", completedDate: "Mar 30, 2025", beneficiary: "Downtown Shelter", feedback: "Great quality, thank you!" },
    { id: 6, donor: "Organic Farms", foodType: "Fresh Produce", quantity: "12 kg", completedDate: "Mar 29, 2025", beneficiary: "Family Support Center", feedback: "Received in excellent condition" }
  ];

  const handleRequestSelect = (request) => {
    setSelectedRequest(request);
    setShowDetailsModal(true);
  };
  
  const handleAcceptRequest = () => {
    // In a real app, this would update the database
    setShowDetailsModal(false);
    alert(`Request from ${selectedRequest.donor} accepted! Navigate to pickup location.`);
  };
  
  const handleStatusUpdate = (requestId, newStatus) => {
    // In a real app, this would update the database
    alert(`Status updated to: ${newStatus}`);
  };
  
  return (
    <div className="delivery-dashboard">
      <nav className="navbar">
        <h1>Food Rescue Network</h1>
        <div className="navbar-menu">
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#pickups">My Pickups</a>
          <a href="#history">History</a>
          <a href="#profile">Profile</a>
        </div>
      </nav>
      
      <div className="container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Delivery Dashboard</h2>
          <button className="btn btn-primary" onClick={() => setShowVolunteerForm(true)}>
            Register as Volunteer
          </button>
        </div>
        
        <div className="stat-cards">
          <div className="card stat-card">
            <div className="stat-value">12</div>
            <div className="stat-label">Available Pickups</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">3</div>
            <div className="stat-label">Your Active Deliveries</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">128</div>
            <div className="stat-label">Completed Deliveries</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">524 kg</div>
            <div className="stat-label">Food Rescued This Month</div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Delivery Management</h3>
          </div>
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'available' ? 'active' : ''}`}
              onClick={() => setActiveTab('available')}
            >
              Available Pickups
            </div>
            <div 
              className={`tab ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              My Active Deliveries
            </div>
            <div 
              className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed Deliveries
            </div>
          </div>
          
          <div className="card-body">
            {activeTab === 'available' && (
              <div className="tab-content active">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Food Type</th>
                      <th>Quantity</th>
                      <th>Distance</th>
                      <th>Pickup Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableRequests.map(request => (
                      <tr key={request.id}>
                        <td>{request.donor}</td>
                        <td>{request.foodType}</td>
                        <td>{request.quantity}</td>
                        <td>{request.distance}</td>
                        <td>{request.time}</td>
                        <td>
                          <button 
                            className="btn btn-primary"
                            onClick={() => handleRequestSelect(request)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'active' && (
              <div className="tab-content active">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Food Type</th>
                      <th>Status</th>
                      <th>Beneficiary</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeRequests.map(request => (
                      <tr key={request.id}>
                        <td>{request.donor}</td>
                        <td>{request.foodType}</td>
                        <td>
                          <span className="status-badge status-pickup">
                            {request.status}
                          </span>
                        </td>
                        <td>{request.beneficiary}</td>
                        <td>
                          <div className="btn-group">
                            {request.status === 'Accepted' && (
                              <button 
                                className="btn btn-secondary"
                                onClick={() => handleStatusUpdate(request.id, 'Picked Up')}
                              >
                                Mark as Picked Up
                              </button>
                            )}
                            {request.status === 'Picked Up' && (
                              <button 
                                className="btn btn-success"
                                onClick={() => handleStatusUpdate(request.id, 'Delivered')}
                              >
                                Mark as Delivered
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'completed' && (
              <div className="tab-content active">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Food Type</th>
                      <th>Beneficiary</th>
                      <th>Date Completed</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedDeliveries.map(delivery => (
                      <tr key={delivery.id}>
                        <td>{delivery.donor}</td>
                        <td>{delivery.foodType}</td>
                        <td>{delivery.beneficiary}</td>
                        <td>{delivery.completedDate}</td>
                        <td>{delivery.feedback}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Volunteer Registration Modal */}
      {showVolunteerForm && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Register as Volunteer</h3>
              <button className="modal-close" onClick={() => setShowVolunteerForm(false)}>×</button>
            </div>
            <div className="modal-body">
              <form className="form-container">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Home Address</label>
                  <input type="text" className="form-control" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Postal Code</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Transportation Method</label>
                  <select className="form-select" required>
                    <option value="">Select an option</option>
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="bicycle">Bicycle</option>
                    <option value="walking">Walking</option>
                    <option value="public">Public Transportation</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Availability</label>
                  <div className="form-check">
                    <input type="checkbox" id="morning" />
                    <label htmlFor="morning">Mornings (8AM - 12PM)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="afternoon" />
                    <label htmlFor="afternoon">Afternoons (12PM - 5PM)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="evening" />
                    <label htmlFor="evening">Evenings (5PM - 9PM)</label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Preferred Delivery Radius (km)</label>
                  <select className="form-select" required>
                    <option value="3">3 km</option>
                    <option value="5">5 km</option>
                    <option value="10">10 km</option>
                    <option value="15">15 km</option>
                    <option value="20">20+ km</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Why do you want to volunteer?</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowVolunteerForm(false)}>Cancel</button>
              <button className="btn btn-primary">Submit Registration</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Pickup Details Modal */}
      {showDetailsModal && selectedRequest && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Pickup Request Details</h3>
              <button className="modal-close" onClick={() => setShowDetailsModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="pickup-details">
                <h4>Donor Information</h4>
                <p><strong>Name:</strong> {selectedRequest.donor}</p>
                <p><strong>Location:</strong> {selectedRequest.location}</p>
                <p><strong>Distance:</strong> {selectedRequest.distance}</p>
                <p><strong>Pickup Time:</strong> {selectedRequest.time}</p>
                
                <h4>Food Information</h4>
                <p><strong>Type:</strong> {selectedRequest.foodType}</p>
                <p><strong>Quantity:</strong> {selectedRequest.quantity}</p>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
                
                <h4>Delivery Location</h4>
                <p><strong>Beneficiary:</strong> Community Food Bank</p>
                <p><strong>Address:</strong> 456 Park Avenue (4.2 km from pickup)</p>
                
                <div className="map-container">
                  <p>Map will be displayed here</p>
                </div>
                
                <h4>Delivery Instructions</h4>
                <p>Please use the back entrance for delivery. Call 555-1234 upon arrival.</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowDetailsModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAcceptRequest}>Accept Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryDashboard;