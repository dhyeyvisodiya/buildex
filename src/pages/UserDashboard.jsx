import React from 'react';
import PropertyCard from '../components/PropertyCard';

const UserDashboard = ({ wishlist, navigateTo }) => {
  // Dummy data for enquiries and rent history
  const enquiries = [
    { id: 1, propertyName: "Skyline Heights", date: "2023-05-15", status: "Pending" },
    { id: 2, propertyName: "Green Valley Apartments", date: "2023-05-10", status: "Approved" }
  ];

  const rentHistory = [
    { id: 1, propertyName: "Lakeview Residency", period: "Jan 2023 - Present", amount: "₹40,000/month" },
    { id: 2, propertyName: "Business Plaza", period: "Mar 2022 - Dec 2022", amount: "₹85,000/month" }
  ];

  return (
    <div className="user-dashboard-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <h1 className="mb-4 animate__animated animate__fadeInDown" style={{ color: '#C8A24A' }}>User Dashboard</h1>
        
        <div className="row g-4">
          {/* Profile Summary */}
          <div className="col-lg-4 animate__animated animate__fadeInLeft">
            <div className="dashboard-card card" style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              border: '1px solid var(--card-border)'
            }}>
              <div className="card-body text-center">
                <div className="profile-avatar bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '100px', 
                  height: '100px',
                  backgroundColor: 'var(--construction-gold)'
                }}>
                  <i className="bi bi-person fs-1 text-white"></i>
                </div>
                <h4 className="card-title" style={{ color: 'var(--primary-text)' }}>John Doe</h4>
                <p style={{ color: 'var(--muted-text)' }}>john.doe@example.com</p>
                <p style={{ color: 'var(--muted-text)' }}>Member since Jan 2023</p>
                <button 
                  className="btn btn-outline-primary"
                  style={{
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--construction-gold)',
                    color: 'var(--construction-gold)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F5F0E6';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(200, 162, 74, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="col-lg-8">
            <div className="row g-3">
              <div className="col-md-4 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="dashboard-card card text-center" style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div className="card-body">
                    <i className="bi bi-heart fs-1 text-danger mb-2"></i>
                    <h5 className="card-title" style={{ color: 'var(--primary-text)' }}>{wishlist.length}</h5>
                    <p className="card-text" style={{ color: 'var(--muted-text)' }}>Wishlist Items</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="dashboard-card card text-center" style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div className="card-body">
                    <i className="bi bi-envelope fs-1 text-primary mb-2" style={{ color: 'var(--construction-gold)' }}></i>
                    <h5 className="card-title" style={{ color: 'var(--primary-text)' }}>{enquiries.length}</h5>
                    <p className="card-text" style={{ color: 'var(--muted-text)' }}>Enquiries</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="dashboard-card card text-center" style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div className="card-body">
                    <i className="bi bi-currency-rupee fs-1 text-success mb-2"></i>
                    <h5 className="card-title" style={{ color: 'var(--primary-text)' }}>2</h5>
                    <p className="card-text" style={{ color: 'var(--muted-text)' }}>Active Rentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wishlist Section */}
          <div className="col-12 animate__animated animate__fadeInUp animate__delay-4s">
            <div className="dashboard-card card" style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              border: '1px solid var(--card-border)'
            }}>
              <div className="card-header d-flex justify-content-between align-items-center" style={{ 
                backgroundColor: 'var(--off-white)',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <h5 className="mb-0" style={{ color: '#C8A24A' }}>Your Wishlist</h5>
                <button 
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => navigateTo('wishlist')}
                  style={{
                    borderRadius: '6px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--construction-gold)',
                    color: 'var(--construction-gold)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F5F0E6';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(200, 162, 74, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  View All
                </button>
              </div>
              <div className="card-body">
                {wishlist.length === 0 ? (
                  <p className="text-center" style={{ color: 'var(--muted-text)' }}>No properties in your wishlist yet.</p>
                ) : (
                  <div className="row g-3">
                    {wishlist.slice(0, 3).map((property, index) => (
                      <div className="col-md-4 animate__animated animate__fadeIn" key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                        <PropertyCard 
                          property={property} 
                          navigateTo={navigateTo}
                          addToCompare={() => {}}
                          addToWishlist={() => {}}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Enquiries Section */}
          <div className="col-lg-6 animate__animated animate__fadeInUp animate__delay-5s">
            <div className="dashboard-card card" style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              border: '1px solid var(--card-border)'
            }}>
              <div className="card-header" style={{ 
                backgroundColor: 'var(--off-white)',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <h5 className="mb-0" style={{ color: '#C8A24A' }}>Recent Enquiries</h5>
              </div>
              <div className="card-body">
                {enquiries.length === 0 ? (
                  <p className="text-center" style={{ color: 'var(--muted-text)' }}>No enquiries yet.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ color: 'var(--primary-text)' }}>Property</th>
                          <th style={{ color: 'var(--primary-text)' }}>Date</th>
                          <th style={{ color: 'var(--primary-text)' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enquiries.map(enquiry => (
                          <tr key={enquiry.id}>
                            <td style={{ color: 'var(--muted-text)' }}>{enquiry.propertyName}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{enquiry.date}</td>
                            <td>
                              <span className={`badge ${
                                enquiry.status === 'Approved' ? 'bg-success' : 
                                enquiry.status === 'Rejected' ? 'bg-danger' : 'bg-warning'
                              }`}>
                                {enquiry.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Rent History Section */}
          <div className="col-lg-6 animate__animated animate__fadeInUp animate__delay-6s">
            <div className="dashboard-card card" style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              border: '1px solid var(--card-border)'
            }}>
              <div className="card-header" style={{ 
                backgroundColor: 'var(--off-white)',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <h5 className="mb-0" style={{ color: '#C8A24A' }}>Rent History</h5>
              </div>
              <div className="card-body">
                {rentHistory.length === 0 ? (
                  <p className="text-center" style={{ color: 'var(--muted-text)' }}>No rent history yet.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ color: 'var(--primary-text)' }}>Property</th>
                          <th style={{ color: 'var(--primary-text)' }}>Period</th>
                          <th style={{ color: 'var(--primary-text)' }}>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rentHistory.map(rent => (
                          <tr key={rent.id}>
                            <td style={{ color: 'var(--muted-text)' }}>{rent.propertyName}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{rent.period}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{rent.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;