import React, { useState } from 'react';

const BuilderDashboard = () => {
  const [activeTab, setActiveTab] = useState('add-property');

  // Dummy data
  const properties = [
    { id: 1, name: "Skyline Heights", type: "Residential", status: "Available", price: "₹2.5 Crores" },
    { id: 2, name: "Business Plaza", type: "Commercial", status: "Booked", price: "₹3.2 Crores" }
  ];

  const buyEnquiries = [
    { id: 1, propertyName: "Skyline Heights", customer: "John Smith", date: "2023-05-15", status: "Pending" },
    { id: 2, propertyName: "Skyline Heights", customer: "Emma Watson", date: "2023-05-10", status: "Approved" }
  ];

  const rentRequests = [
    { id: 1, propertyName: "Business Plaza", customer: "Robert Johnson", date: "2023-05-12", status: "Pending" }
  ];

  const tenantPayments = [
    { id: 1, propertyName: "Business Plaza", tenant: "Robert Johnson", amount: "₹85,000", dueDate: "2023-05-30", status: "Paid" }
  ];

  return (
    <div className="builder-dashboard-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <h1 className="mb-4 animate__animated animate__fadeInDown">Builder Dashboard</h1>
        
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4 animate__animated animate__fadeIn">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'add-property' ? 'active' : ''}`}
              onClick={() => setActiveTab('add-property')}
            >
              Add Property
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'my-properties' ? 'active' : ''}`}
              onClick={() => setActiveTab('my-properties')}
            >
              My Properties
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'buy-enquiries' ? 'active' : ''}`}
              onClick={() => setActiveTab('buy-enquiries')}
            >
              Buy Enquiries
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'rent-requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('rent-requests')}
            >
              Rent Requests
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'tenant-payments' ? 'active' : ''}`}
              onClick={() => setActiveTab('tenant-payments')}
            >
              Tenant Payments
            </button>
          </li>
        </ul>
        
        {/* Tab Content */}
        <div className="tab-content">
          {/* Add Property Form */}
          {activeTab === 'add-property' && (
            <div className="tab-pane fade show active animate__animated animate__fadeIn">
              <div className="dashboard-card card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)'
              }}>
                <div className="card-header" style={{ 
                  backgroundColor: 'var(--off-white)',
                  borderBottom: '1px solid var(--card-border)'
                }}>
                  <h5 className="mb-0">Add New Property</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Property Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Property Type</label>
                        <select 
                          className="form-select"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        >
                          <option>Select Type</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Purpose</label>
                        <select 
                          className="form-select"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        >
                          <option>Select Purpose</option>
                          <option>Buy</option>
                          <option>Rent</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Price/Rent</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="₹"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Area (sq.ft)</label>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Locality</label>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Possession Status</label>
                        <select 
                          className="form-select"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        >
                          <option>Select Status</option>
                          <option>Ready to Move</option>
                          <option>Under Construction</option>
                          <option>Immediate</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Amenities</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter amenities separated by commas"
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Images</label>
                        <input 
                          type="file" 
                          className="form-control" 
                          multiple
                          style={{
                            borderColor: 'var(--section-divider)',
                            borderRadius: '8px',
                            padding: '10px',
                            color: 'var(--primary-text)',
                            backgroundColor: 'var(--card-bg)'
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        style={{
                          borderRadius: '8px',
                          fontWeight: '600',
                          padding: '12px',
                          transition: 'all 0.3s ease',
                          background: 'linear-gradient(90deg, #C8A24A, #9E7C2F)',
                          border: 'none',
                          color: '#0B1220'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#9E7C2F';
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = '0 6px 16px rgba(158, 124, 47, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #C8A24A, #9E7C2F)';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
                        }}
                      >
                        Add Property
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {/* My Properties */}
          {activeTab === 'my-properties' && (
            <div className="tab-pane fade show active animate__animated animate__fadeIn">
              <div className="dashboard-card card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid #E2E8F0'
              }}>
                <div className="card-header d-flex justify-content-between align-items-center" style={{ 
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <h5 className="mb-0">My Properties</h5>
                  <button 
                    className="btn btn-sm btn-primary"
                    style={{
                      borderRadius: '6px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(90deg, #C8A24A, #9E7C2F)',
                      border: 'none',
                      color: '#0B1220'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#9E7C2F';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'linear-gradient(90deg, #C8A24A, #9E7C2F)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
                    }}
                  >
                    Add Property
                  </button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property Name</th>
                          <th style={{ color: '#0B1220' }}>Type</th>
                          <th style={{ color: '#0B1220' }}>Price</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                          <th style={{ color: '#0B1220' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map(property => (
                          <tr key={property.id}>
                            <td style={{ color: '#64748B' }}>{property.name}</td>
                            <td style={{ color: '#64748B' }}>{property.type}</td>
                            <td style={{ color: '#64748B' }}>{property.price}</td>
                            <td>
                              <span className={`badge ${
                                property.status === 'Available' ? 'bg-success' : 
                                property.status === 'Booked' ? 'bg-warning' : 'bg-danger'
                              }`}>
                                {property.status}
                              </span>
                            </td>
                            <td>
                              <button 
                                className="btn btn-sm btn-outline-primary me-1"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  border: '1px solid #C8A24A',
                                  color: '#C8A24A',
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
                                Edit
                              </button>
                              <button 
                                className="btn btn-sm btn-outline-danger"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  border: '1px solid #EF4444',
                                  color: '#EF4444',
                                  background: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#FEF2F2';
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = 'transparent';
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = 'none';
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Buy Enquiries */}
          {activeTab === 'buy-enquiries' && (
            <div className="tab-pane fade show active animate__animated animate__fadeIn">
              <div className="dashboard-card card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid #E2E8F0'
              }}>
                <div className="card-header" style={{ 
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <h5 className="mb-0">Buy Enquiries</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property</th>
                          <th style={{ color: '#0B1220' }}>Customer</th>
                          <th style={{ color: '#0B1220' }}>Date</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                          <th style={{ color: '#0B1220' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buyEnquiries.map(enquiry => (
                          <tr key={enquiry.id}>
                            <td style={{ color: '#64748B' }}>{enquiry.propertyName}</td>
                            <td style={{ color: '#64748B' }}>{enquiry.customer}</td>
                            <td style={{ color: '#64748B' }}>{enquiry.date}</td>
                            <td>
                              <span className={`badge ${
                                enquiry.status === 'Approved' ? 'bg-success' : 
                                enquiry.status === 'Rejected' ? 'bg-danger' : 'bg-warning'
                              }`}>
                                {enquiry.status}
                              </span>
                            </td>
                            <td>
                              <button 
                                className="btn btn-sm btn-success me-1"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  background: '#10B981',
                                  border: 'none',
                                  color: '#FFFFFF'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#059669';
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = '#10B981';
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                                }}
                              >
                                Approve
                              </button>
                              <button 
                                className="btn btn-sm btn-danger"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  background: '#EF4444',
                                  border: 'none',
                                  color: '#FFFFFF'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#DC2626';
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = '#EF4444';
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
                                }}
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Rent Requests */}
          {activeTab === 'rent-requests' && (
            <div className="tab-pane fade show active animate__animated animate__fadeIn">
              <div className="dashboard-card card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid #E2E8F0'
              }}>
                <div className="card-header" style={{ 
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <h5 className="mb-0">Rent Requests</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property</th>
                          <th style={{ color: '#0B1220' }}>Customer</th>
                          <th style={{ color: '#0B1220' }}>Date</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                          <th style={{ color: '#0B1220' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rentRequests.map(request => (
                          <tr key={request.id}>
                            <td style={{ color: '#64748B' }}>{request.propertyName}</td>
                            <td style={{ color: '#64748B' }}>{request.customer}</td>
                            <td style={{ color: '#64748B' }}>{request.date}</td>
                            <td>
                              <span className={`badge ${
                                request.status === 'Approved' ? 'bg-success' : 
                                request.status === 'Rejected' ? 'bg-danger' : 'bg-warning'
                              }`}>
                                {request.status}
                              </span>
                            </td>
                            <td>
                              <button 
                                className="btn btn-sm btn-success me-1"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  background: '#10B981',
                                  border: 'none',
                                  color: '#FFFFFF'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#059669';
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = '#10B981';
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                                }}
                              >
                                Approve
                              </button>
                              <button 
                                className="btn btn-sm btn-danger"
                                style={{
                                  borderRadius: '6px',
                                  fontWeight: '600',
                                  transition: 'all 0.3s ease',
                                  background: '#EF4444',
                                  border: 'none',
                                  color: '#FFFFFF'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#DC2626';
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = '#EF4444';
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.3)';
                                }}
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tenant Payments */}
          {activeTab === 'tenant-payments' && (
            <div className="tab-pane fade show active animate__animated animate__fadeIn">
              <div className="dashboard-card card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid #E2E8F0'
              }}>
                <div className="card-header" style={{ 
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0'
                }}>
                  <h5 className="mb-0">Tenant Payments</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property</th>
                          <th style={{ color: '#0B1220' }}>Tenant</th>
                          <th style={{ color: '#0B1220' }}>Amount</th>
                          <th style={{ color: '#0B1220' }}>Due Date</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tenantPayments.map(payment => (
                          <tr key={payment.id}>
                            <td style={{ color: '#64748B' }}>{payment.propertyName}</td>
                            <td style={{ color: '#64748B' }}>{payment.tenant}</td>
                            <td style={{ color: '#64748B' }}>{payment.amount}</td>
                            <td style={{ color: '#64748B' }}>{payment.dueDate}</td>
                            <td>
                              <span className={`badge ${
                                payment.status === 'Paid' ? 'bg-success' : 'bg-warning'
                              }`}>
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderDashboard;