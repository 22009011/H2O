// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard1 = () => {
//   const navigate = useNavigate();
  
//   // Mock data for dashboard
//   const stats = {
//     totalDonations: 12,
//     mealsDonated: 148,
//     kgSaved: 45,
//     co2Reduced: 86
//   };
  
//   const activeDonations = [
//     { id: 1, type: 'Cooked Food', quantity: '5 servings', expiry: '2025-04-01 18:00', status: 'Available' },
//     { id: 2, type: 'Vegetables', quantity: '3 kg', expiry: '2025-04-02 12:00', status: 'Reserved' }
//   ];
  
//   const handleCreateDonation = () => {
//     navigate('/create-donation');
//   };
  
//   const handleNotifications = () => {
//     navigate('/notifications');
//   };
  
//   return (
//     <div className="dashboard-container fade-in">
//       {/* Header Section */}
//       <div className="dashboard-header">
//         <div>
//           <h1 className="header-title">Dashboard</h1>
//           <p className="header-subtitle">Welcome back, Hero!</p>
//         </div>
//         <div className="notification-icon" onClick={handleNotifications}>
//           <span className="notification-badge">3</span>
//           <span className="material-icons">notifications_none</span>
//         </div>
//       </div>
      
//       {/* Impact Stats Grid */}
//       <div className="impact-section">
//         <h2 className="section-title">Your Impact</h2>
//         <div className="impact-grid">
//           <div className="stat-card">
//             <div className="stat-icon-bg green">
//               <span className="material-icons">volunteer_activism</span>
//             </div>
//             <div className="stat-content">
//               <span className="stat-number">{stats.totalDonations}</span>
//               <span className="stat-label">Donations</span>
//             </div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-icon-bg orange">
//               <span className="material-icons">restaurant</span>
//             </div>
//             <div className="stat-content">
//               <span className="stat-number">{stats.mealsDonated}</span>
//               <span className="stat-label">Meals</span>
//             </div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-icon-bg blue">
//               <span className="material-icons">scale</span>
//             </div>
//             <div className="stat-content">
//               <span className="stat-number">{stats.kgSaved}</span>
//               <span className="stat-label">Kg Saved</span>
//             </div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-icon-bg teal">
//               <span className="material-icons">co2</span>
//             </div>
//             <div className="stat-content">
//               <span className="stat-number">{stats.co2Reduced}</span>
//               <span className="stat-label">CO₂ Reduced</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Primary Action Button */}
//       <button className="create-donation-btn ripple" onClick={handleCreateDonation}>
//         <span className="material-icons">add_circle</span>
//         Create New Donation
//       </button>
      
//       {/* Active Donations List */}
//       <div className="active-donations-section">
//         <div className="section-header">
//           <h2 className="section-title">Active Donations</h2>
//           <button className="view-all-btn">View All</button>
//         </div>
        
//         {activeDonations.length > 0 ? (
//           <div className="donation-list">
//             {activeDonations.map(donation => (
//               <div className="donation-card" key={donation.id}>
//                 <div className="donation-header">
//                   <h3>{donation.type}</h3>
//                   <span className={`status-badge ${donation.status.toLowerCase()}`}>
//                     {donation.status}
//                   </span>
//                 </div>
//                 <div className="donation-body">
//                   <div className="detail-row">
//                     <span className="material-icons">inventory_2</span>
//                     <span>{donation.quantity}</span>
//                   </div>
//                   <div className="detail-row">
//                     <span className="material-icons">event</span>
//                     <span>Expires: {new Date(donation.expiry).toLocaleDateString()}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="empty-state">
//             <div className="empty-icon-bg">
//               <span className="material-icons">inventory</span>
//             </div>
//             <p className="empty-title">No active donations</p>
//             <p className="empty-subtitle">Create a new donation to share food with your community</p>
//           </div>
//         )}
//       </div>
      
//       {/* Recent Activity Feed */}
//       <div className="recent-activity-section">
//         <div className="section-header">
//           <h2 className="section-title">Recent Activity</h2>
//         </div>
//         <div className="activity-list">
//           <div className="activity-item">
//             <div className="activity-icon-container picked">
//               <span className="material-icons">check</span>
//             </div>
//             <div className="activity-content">
//               <p className="activity-text">Vegetables donation picked up</p>
//               <span className="activity-time">2 days ago</span>
//             </div>
//           </div>
//           <div className="activity-item">
//             <div className="activity-icon-container created">
//               <span className="material-icons">add</span>
//             </div>
//             <div className="activity-content">
//               <p className="activity-text">Created new bread donation</p>
//               <span className="activity-time">4 days ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard1;













































import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard1 = () => {
  const navigate = useNavigate();
  
  const stats = {
    totalDonations: 12,
    mealsDonated: 148,
    kgSaved: 45,
    co2Reduced: 86
  };
  
  const activeDonations = [
    { id: 1, type: 'Cooked Food', quantity: '5 servings', expiry: '2025-04-01 18:00', status: 'Available' },
    { id: 2, type: 'Vegetables', quantity: '3 kg', expiry: '2025-04-02 12:00', status: 'Reserved' }
  ];
  
  const handleCreateDonation = () => {
    navigate('/create-donation');
  };
  
  const handleNotifications = () => {
    navigate('/notifications');
  };
  
  return (
    <div className="dashboard-container">
      <style>{`
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        
        * {
          box-sizing: border-box;
        }
        
        .dashboard-container {
          padding: 20px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8f5e9 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          animation: slideDown 0.5s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dashboard-header h1 {
          font-size: 32px;
          margin: 0;
          background: linear-gradient(135deg, #2e7d32 0%, #4CAF50 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        
        .notification-icon {
          position: relative;
          cursor: pointer;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .notification-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
        
        .notification-icon:active {
          transform: scale(0.95);
        }
        
        .notification-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
          color: white;
          font-size: 11px;
          font-weight: 600;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid white;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .material-icons {
          font-size: 24px;
          color: #2e7d32;
        }
        
        .impact-summary {
          margin-bottom: 28px;
          animation: fadeIn 0.6s ease-out 0.1s both;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .impact-summary h2 {
          font-size: 20px;
          margin-bottom: 16px;
          color: #1b5e20;
          font-weight: 700;
        }
        
        .impact-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fdf9 100%);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(76, 175, 80, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4CAF50 0%, #81C784 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(76, 175, 80, 0.15);
        }
        
        .stat-card:hover::before {
          transform: scaleX(1);
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #2e7d32 0%, #4CAF50 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 13px;
          color: #666;
          margin-top: 6px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .create-donation-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          padding: 16px 24px;
          border-radius: 12px;
          border: none;
          width: 100%;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeIn 0.6s ease-out 0.2s both;
        }
        
        .create-donation-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
        }
        
        .create-donation-btn:active {
          transform: translateY(0);
        }
        
        .create-donation-btn .material-icons {
          font-size: 22px;
          color: white;
        }
        
        .active-donations {
          margin-bottom: 28px;
          animation: fadeIn 0.6s ease-out 0.3s both;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .section-header h2 {
          font-size: 20px;
          margin: 0;
          color: #1b5e20;
          font-weight: 700;
        }
        
        .view-all-btn {
          background: none;
          border: none;
          color: #4CAF50;
          font-size: 14px;
          padding: 6px 12px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .view-all-btn:hover {
          background-color: rgba(76, 175, 80, 0.1);
        }
        
        .donation-list {
          margin-bottom: 24px;
        }
        
        .donation-card {
          background: white;
          border-radius: 16px;
          padding: 18px;
          margin-bottom: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
        }
        
        .donation-card:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .donation-status {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
        }
        
        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          display: inline-block;
          letter-spacing: 0.5px;
        }
        
        .status-badge.available {
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
        }
        
        .status-badge.reserved {
          background: linear-gradient(135deg, #FF9800 0%, #FFB74D 100%);
          box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
        }
        
        .donation-info h3 {
          font-size: 18px;
          margin: 0 0 12px 0;
          color: #212121;
          font-weight: 600;
        }
        
        .donation-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
        }
        
        .detail-item .material-icons {
          font-size: 18px;
          color: #4CAF50;
        }
        
        .empty-state {
          text-align: center;
          padding: 40px 20px;
          background: white;
          border-radius: 16px;
          border: 2px dashed #e0e0e0;
        }
        
        .empty-state .material-icons {
          font-size: 64px;
          color: #bdbdbd;
          margin-bottom: 12px;
        }
        
        .empty-state p:first-of-type {
          font-weight: 600;
          color: #666;
          margin: 8px 0;
          font-size: 16px;
        }
        
        .empty-state p:last-of-type {
          color: #999;
          margin: 4px 0;
          font-size: 14px;
        }
        
        .recent-activity {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }
        
        .activity-list {
          background: white;
          border-radius: 16px;
          padding: 4px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          border-radius: 12px;
          transition: background-color 0.2s ease;
        }
        
        .activity-item:hover {
          background-color: #f8f9fa;
        }
        
        .activity-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
        }
        
        .activity-icon.picked {
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          color: white;
        }
        
        .activity-icon.created {
          background: linear-gradient(135deg, #2196F3 0%, #42A5F5 100%);
          color: white;
        }
        
        .activity-content {
          flex: 1;
        }
        
        .activity-content p {
          margin: 0 0 4px 0;
          color: #212121;
          font-size: 14px;
          font-weight: 500;
        }
        
        .activity-time {
          font-size: 12px;
          color: #999;
        }
        
        @media (max-width: 768px) {
          .dashboard-container {
            padding: 16px;
          }
          
          .dashboard-header h1 {
            font-size: 28px;
          }
          
          .impact-stats {
            gap: 12px;
          }
          
          .stat-card {
            padding: 16px;
          }
          
          .stat-number {
            font-size: 28px;
          }
        }
      `}</style>
      
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="notification-icon" onClick={handleNotifications}>
          <span className="notification-badge">3</span>
          <span className="material-icons">notifications</span>
        </div>
      </div>
      
      <div className="impact-summary">
        <h2>Your Impact</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <span className="stat-number">{stats.totalDonations}</span>
            <span className="stat-label">Donations</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.mealsDonated}</span>
            <span className="stat-label">Meals</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.kgSaved}</span>
            <span className="stat-label">Kg Saved</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.co2Reduced}</span>
            <span className="stat-label">CO₂ Reduced</span>
          </div>
        </div>
      </div>
      
      <button className="create-donation-btn" onClick={handleCreateDonation}>
        <span className="material-icons">add</span>
        Create New Donation
      </button>
      
      <div className="active-donations">
        <div className="section-header">
          <h2>Active Donations</h2>
          <button className="view-all-btn">View All</button>
        </div>
        
        {activeDonations.length > 0 ? (
          <div className="donation-list">
            {activeDonations.map(donation => (
              <div className="donation-card" key={donation.id}>
                <div className="donation-status">
                  <span className={`status-badge ${donation.status.toLowerCase()}`}>
                    {donation.status}
                  </span>
                </div>
                <div className="donation-info">
                  <h3>{donation.type}</h3>
                  <div className="donation-details">
                    <div className="detail-item">
                      <span className="material-icons">inventory_2</span>
                      <span>{donation.quantity}</span>
                    </div>
                    <div className="detail-item">
                      <span className="material-icons">schedule</span>
                      <span>Expires: {new Date(donation.expiry).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="material-icons">inventory</span>
            <p>No active donations</p>
            <p>Create a new donation to share food with your community</p>
          </div>
        )}
      </div>
      
      <div className="recent-activity">
        <div className="section-header">
          <h2>Recent Activity</h2>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon picked">✓</span>
            <div className="activity-content">
              <p>Your vegetables donation was picked up</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon created">+</span>
            <div className="activity-content">
              <p>You created a new bread donation</p>
              <span className="activity-time">4 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;