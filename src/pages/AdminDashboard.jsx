import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('builders');

  // Dummy data
  const builders = [
    { id: 1, name: "ABC Constructions", email: "abc@constructions.com", phone: "+91 9876543210", status: "Verified", properties: 5 },
    { id: 2, name: "XYZ Developers", email: "xyz@developers.com", phone: "+91 9876543211", status: "Pending", properties: 3 },
    { id: 3, name: "PQR Builders", email: "pqr@builders.com", phone: "+91 9876543212", status: "Blocked", properties: 2 }
  ];

  const properties = [
    { id: 1, name: "Skyline Heights", builder: "ABC Constructions", type: "Residential", status: "Listed" },
    { id: 2, name: "Business Plaza", builder: "XYZ Developers", type: "Commercial", status: "Listed" },
    { id: 3, name: "Green Valley Apartments", builder: "PQR Builders", type: "Residential", status: "Reported" }
  ];

  const complaints = [
    { id: 1, property: "Business Plaza", complainant: "John Smith", issue: "Incorrect pricing information", date: "2023-05-15", status: "Open" },
    { id: 2, property: "Green Valley Apartments", complainant: "Emma Watson", issue: "Misleading amenities", date: "2023-05-10", status: "Resolved" }
  ];

  return (
    <div className="admin-dashboard-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <h1 className="mb-4 animate__animated animate__fadeInDown">Admin Dashboard</h1>
        
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4 animate__animated animate__fadeIn">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'builders' ? 'active' : ''}`}
              onClick={() => setActiveTab('builders')}
            >
              Builder Verification
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'properties' ? 'active' : ''}`}
              onClick={() => setActiveTab('properties')}
            >
              Property Monitoring
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'complaints' ? 'active' : ''}`}
              onClick={() => setActiveTab('complaints')}
            >
              Complaints
            </button>
          </li>
        </ul>
        
        {/* Tab Content */}
        <div className="tab-content">
          {/* Builder Verification */}
          {activeTab === 'builders' && (
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
                  <h5 className="mb-0">Builder Verification</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: 'var(--primary-text)' }}>Builder Name</th>
                          <th style={{ color: 'var(--primary-text)' }}>Email</th>
                          <th style={{ color: 'var(--primary-text)' }}>Phone</th>
                          <th style={{ color: 'var(--primary-text)' }}>Properties</th>
                          <th style={{ color: 'var(--primary-text)' }}>Status</th>
                          <th style={{ color: 'var(--primary-text)' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {builders.map(builder => (
                          <tr key={builder.id}>
                            <td style={{ color: 'var(--muted-text)' }}>{builder.name}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{builder.email}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{builder.phone}</td>
                            <td style={{ color: 'var(--muted-text)' }}>{builder.properties}</td>
                            <td>
                              <span className={`badge ${
                                builder.status === 'Verified' ? 'bg-success' : 
                                builder.status === 'Pending' ? 'bg-warning' : 'bg-danger'
                              }`}>
                                {builder.status}
                              </span>
                            </td>
                            <td>
                              {builder.status === 'Pending' && (
                                <>
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
                                    Verify
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
                                </>
                              )}
                              {builder.status === 'Verified' && (
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
                                  Block
                                </button>
                              )}
                              {builder.status === 'Blocked' && (
                                <button 
                                  className="btn btn-sm btn-success"
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
                                  Unblock
                                </button>
                              )}
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
          
          {/* Property Monitoring */}
          {activeTab === 'properties' && (
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
                  <h5 className="mb-0">Property Monitoring</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property Name</th>
                          <th style={{ color: '#0B1220' }}>Builder</th>
                          <th style={{ color: '#0B1220' }}>Type</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                          <th style={{ color: '#0B1220' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map(property => (
                          <tr key={property.id}>
                            <td style={{ color: '#64748B' }}>{property.name}</td>
                            <td style={{ color: '#64748B' }}>{property.builder}</td>
                            <td style={{ color: '#64748B' }}>{property.type}</td>
                            <td>
                              <span className={`badge ${
                                property.status === 'Listed' ? 'bg-success' : 'bg-danger'
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
                                View
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
                                Block
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
          
          {/* Complaints */}
          {activeTab === 'complaints' && (
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
                  <h5 className="mb-0">Complaints</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: '#0B1220' }}>Property</th>
                          <th style={{ color: '#0B1220' }}>Complainant</th>
                          <th style={{ color: '#0B1220' }}>Issue</th>
                          <th style={{ color: '#0B1220' }}>Date</th>
                          <th style={{ color: '#0B1220' }}>Status</th>
                          <th style={{ color: '#0B1220' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {complaints.map(complaint => (
                          <tr key={complaint.id}>
                            <td style={{ color: '#64748B' }}>{complaint.property}</td>
                            <td style={{ color: '#64748B' }}>{complaint.complainant}</td>
                            <td style={{ color: '#64748B' }}>{complaint.issue}</td>
                            <td style={{ color: '#64748B' }}>{complaint.date}</td>
                            <td>
                              <span className={`badge ${
                                complaint.status === 'Resolved' ? 'bg-success' : 'bg-warning'
                              }`}>
                                {complaint.status}
                              </span>
                            </td>
                            <td>
                              {complaint.status === 'Open' && (
                                <>
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
                                    Resolve
                                  </button>
                                  <button 
                                    className="btn btn-sm btn-outline-primary"
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
                                    Investigate
                                  </button>
                                </>
                              )}
                              {complaint.status === 'Resolved' && (
                                <button 
                                  className="btn btn-sm btn-outline-secondary"
                                  style={{
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid #94A3B8',
                                    color: '#64748B',
                                    background: 'transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = '#F1F5F9';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(148, 163, 184, 0.2)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                  }}
                                >
                                  Closed
                                </button>
                              )}
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

export default AdminDashboard;