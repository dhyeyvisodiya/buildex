import React, { useState } from 'react';

const PropertyDetail = ({ property, navigateTo, addToCompare, addToWishlist }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showRentModal, setShowRentModal] = useState(false);

  if (!property) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center">
          <h2>Property not found</h2>
          <button className="btn btn-primary mt-3" onClick={() => navigateTo('property-list')}>
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const getAvailabilityClass = (availability) => {
    switch (availability) {
      case 'available': return 'badge-available';
      case 'booked': return 'badge-booked';
      case 'sold': return 'badge-sold';
      default: return 'badge-secondary';
    }
  };

  const getAvailabilityText = (availability) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'booked': return 'Booked';
      case 'sold': return 'Sold';
      default: return 'Unknown';
    }
  };

  return (
    <div className="property-detail-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        {/* Back Button */}
        <div className="mb-3">
          <button 
            className="btn btn-outline-primary" 
            onClick={() => navigateTo('property-list')}
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
            ← Back to Properties
          </button>
        </div>

        {/* Property Header */}
        <div className="row mb-4 animate__animated animate__fadeInUp">
          <div className="col-md-8">
            <h1 style={{ color: 'var(--primary-text)' }}>{property.name}</h1>
            <p style={{ color: 'var(--muted-text)' }}>{property.locality}, {property.city}</p>
          </div>
          <div className="col-md-4 text-md-end">
            <h2 style={{ color: 'var(--primary-text)' }}>{property.purpose === 'Buy' ? property.price : property.rent}</h2>
            <span className={`badge ${getAvailabilityClass(property.availability)} fs-6`}>
              {getAvailabilityText(property.availability)}
            </span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="gallery-container position-relative">
            {property.images && property.images.length > 0 ? (
              <>
                <img 
                  src={property.images[currentImageIndex]} 
                  className="property-gallery w-100" 
                  alt={property.name} 
                  style={{ borderRadius: '12px', height: '400px', objectFit: 'cover' }}
                />
                {property.images.length > 1 && (
                  <>
                    <button 
                      className="btn btn-primary position-absolute" 
                      style={{ 
                        left: '10px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))',
                        border: 'none',
                        color: 'var(--primary-text)'
                      }}
                      onClick={prevImage}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      className="btn btn-primary position-absolute" 
                      style={{ 
                        right: '10px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))',
                        border: 'none',
                        color: 'var(--primary-text)'
                      }}
                      onClick={nextImage}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
                <div className="text-center mt-2">
                  <span className="badge bg-primary" style={{ backgroundColor: 'var(--construction-gold)', color: 'var(--primary-text)' }}>
                    {currentImageIndex + 1} of {property.images.length}
                  </span>
                </div>
              </>
            ) : (
              <div className="property-gallery bg-light d-flex align-items-center justify-content-center rounded" style={{ height: '400px' }}>
                <span className="text-muted">No Images Available</span>
              </div>
            )}
          </div>
          
          <div className="d-flex justify-content-between mt-3">
            <button 
              className="btn btn-outline-primary" 
              onClick={() => addToCompare(property)}
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
              <i className="bi bi-arrow-left-right me-1"></i> Add to Compare
            </button>
            <button 
              className="btn btn-outline-danger" 
              onClick={() => addToWishlist(property)}
              style={{
                borderRadius: '8px',
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
              <i className="bi bi-heart me-1"></i> Add to Wishlist
            </button>
            <button 
              className="btn btn-outline-secondary"
              style={{
                borderRadius: '8px',
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
              <i className="bi bi-file-pdf me-1"></i> Brochure
            </button>
          </div>
        </div>

        <div className="row">
          {/* Details Section */}
          <div className="col-lg-8">
            <div className="details-section mb-5 animate__animated animate__fadeInUp animate__delay-2s">
              <h3 style={{ color: '#0B1220' }}>Property Details</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <p style={{ color: '#64748B' }}><strong style={{ color: '#0B1220' }}>Property Type:</strong> {property.type}</p>
                </div>
                <div className="col-md-6">
                  <p style={{ color: '#64748B' }}><strong style={{ color: '#0B1220' }}>Area:</strong> {property.area}</p>
                </div>
                <div className="col-md-6">
                  <p style={{ color: '#64748B' }}><strong style={{ color: '#0B1220' }}>Possession:</strong> {property.possession}</p>
                </div>
                <div className="col-md-6">
                  <p style={{ color: '#64748B' }}><strong style={{ color: '#0B1220' }}>Construction Status:</strong> {property.constructionStatus}</p>
                </div>
                <div className="col-md-6">
                  <p style={{ color: '#64748B' }}><strong style={{ color: '#0B1220' }}>Purpose:</strong> {property.purpose}</p>
                </div>
              </div>
              
              <h4 className="mt-4" style={{ color: '#0B1220' }}>Amenities</h4>
              <div className="row g-2">
                {property.amenities && property.amenities.map((amenity, index) => (
                  <div className="col-auto" key={index}>
                    <span className="badge" style={{ backgroundColor: '#C8A24A', color: '#0B1220' }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="map-section mb-5 animate__animated animate__fadeInUp animate__delay-3s">
              <h3 style={{ color: '#0B1220' }}>Location</h3>
              <div className="map-container bg-light rounded" style={{ height: '300px', overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.778553750634!2d72.8771903148513!3d19.07609018708716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652971200000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Property Location"
                ></iframe>
              </div>
            </div>

            {/* 360 View Section */}
            <div className="view-section mb-5 animate__animated animate__fadeInUp animate__delay-4s">
              <h3 style={{ color: '#0B1220' }}>360° Virtual Tour</h3>
              <div className="street-view rounded" style={{ backgroundColor: '#F1F5F9' }}>
                <div className="text-center p-5">
                  <i className="bi bi-camera fs-1 mb-3" style={{ color: '#94A3B8' }}></i>
                  <p style={{ color: '#64748B' }}>Interactive 360° view of the property</p>
                  <button 
                    className="btn btn-primary"
                    style={{
                      borderRadius: '8px',
                      fontWeight: '600',
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
                    View Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Panel */}
          <div className="col-lg-4">
            <div className="action-panel sticky-top animate__animated animate__fadeInUp animate__delay-2s">
              <div className="card" style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid #E2E8F0'
              }}>
                <div className="card-body">
                  <h4 className="card-title" style={{ color: '#0B1220' }}>Interested in this property?</h4>
                  <p className="card-text" style={{ color: '#64748B' }}>Get in touch with our experts for more information.</p>
                  
                  {property.purpose === 'Buy' ? (
                    <button 
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => setShowEnquiryModal(true)}
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
                      Send Buy Enquiry
                    </button>
                  ) : (
                    <button 
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => setShowRentModal(true)}
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
                      Request for Rent
                    </button>
                  )}
                  
                  <button 
                    className="btn btn-outline-secondary w-100"
                    style={{
                      borderRadius: '8px',
                      fontWeight: '600',
                      padding: '12px',
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
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Enquiry Modal */}
      {showEnquiryModal && (
        <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ borderRadius: '12px' }}>
              <div className="modal-header" style={{ borderBottom: '1px solid #E2E8F0' }}>
                <h5 className="modal-title">Buy Enquiry for {property.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowEnquiryModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      rows="3"
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ borderTop: '1px solid #E2E8F0' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowEnquiryModal(false)}
                  style={{
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: '1px solid #94A3B8',
                    color: '#64748B',
                    background: 'transparent'
                  }}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  style={{
                    borderRadius: '8px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #C8A24A, #9E7C2F)',
                    border: 'none',
                    color: '#0B1220'
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rent Request Modal */}
      {showRentModal && (
        <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ borderRadius: '12px' }}>
              <div className="modal-header" style={{ borderBottom: '1px solid #E2E8F0' }}>
                <h5 className="modal-title">Rent Request for {property.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowRentModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Move-in Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      rows="3"
                      style={{
                        borderColor: '#CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#0B1220',
                        backgroundColor: '#FFFFFF'
                      }}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ borderTop: '1px solid #E2E8F0' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowRentModal(false)}
                  style={{
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: '1px solid #94A3B8',
                    color: '#64748B',
                    background: 'transparent'
                  }}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  style={{
                    borderRadius: '8px',
                    fontWeight: '600',
                    background: 'linear-gradient(90deg, #C8A24A, #9E7C2F)',
                    border: 'none',
                    color: '#0B1220'
                  }}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop */}
      {(showEnquiryModal || showRentModal) && (
        <div className="modal-backdrop show"></div>
      )}
    </div>
  );
};

export default PropertyDetail;