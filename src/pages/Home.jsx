import React from 'react';

const Home = ({ navigateTo }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5 animate__animated animate__fadeIn" style={{ 
        background: 'linear-gradient(135deg, var(--charcoal-slate) 0%, #1E293B 100%)',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInUp">Buildex</h1>
              <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">Verified New Schemes & Smart Rental Management</p>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-2s">Discover your dream property with our trusted platform. We verify all listings to ensure you get real deals from reliable builders.</p>
              <div className="d-flex gap-3 animate__animated animate__fadeInUp animate__delay-3s">
                <button 
                  className="btn btn-primary px-4 py-2 animate__animated animate__pulse animate__delay-4s"
                  onClick={() => navigateTo('property-list', { purpose: 'Buy' })}
                  style={{
                    background: 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))',
                    border: 'none',
                    color: 'var(--primary-text)',
                    boxShadow: '0 4px 12px rgba(158, 124, 47, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(158, 124, 47, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
                  }}
                >
                  Explore Buy Properties
                </button>
                <button 
                  className="btn btn-outline-primary px-4 py-2 animate__animated animate__pulse animate__delay-4s"
                  onClick={() => navigateTo('property-list', { purpose: 'Rent' })}
                  style={{
                    border: '1px solid var(--construction-gold)',
                    color: 'var(--construction-gold)',
                    background: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#F5F0E6';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(200, 162, 74, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Explore Rent Properties
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-image-container animate__animated animate__fadeInRight" style={{ height: '400px', overflow: 'hidden', borderRadius: '14px', backgroundImage: "url('/images/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                {/* Dark overlay for readability */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.25)',
                    borderRadius: '14px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 animate__animated animate__fadeIn" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="container-fluid">
          <h2 className="text-center mb-5 animate__animated animate__fadeInUp">Why Choose Buildex?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="feature-card text-center p-4 rounded h-100 animate__animated animate__fadeInUp" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 20px rgba(15, 23, 42, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="feature-icon text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '60px', 
                  height: '60px', 
                  lineHeight: '60px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'pulse 2s infinite'
                }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5>Verified Builders</h5>
                <p className="text-muted">All our builders are verified for authenticity and reliability.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4 rounded h-100 animate__animated animate__fadeInUp animate__delay-1s" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 20px rgba(15, 23, 42, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="feature-icon text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '60px', 
                  height: '60px', 
                  lineHeight: '60px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'pulse 2s infinite'
                }}>
                  <i className="bi bi-house-door"></i>
                </div>
                <h5>New Schemes Only</h5>
                <p className="text-muted">Access to latest property schemes and upcoming projects.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4 rounded h-100 animate__animated animate__fadeInUp animate__delay-2s" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 20px rgba(15, 23, 42, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="feature-icon text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '60px', 
                  height: '60px', 
                  lineHeight: '60px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'pulse 2s infinite'
                }}>
                  <i className="bi bi-camera"></i>
                </div>
                <h5>360° View</h5>
                <p className="text-muted">Experience properties virtually with our 360° view technology.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4 rounded h-100 animate__animated animate__fadeInUp animate__delay-3s" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 20px rgba(15, 23, 42, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="feature-icon text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '60px', 
                  height: '60px', 
                  lineHeight: '60px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'pulse 2s infinite'
                }}>
                  <i className="bi bi-graph-up"></i>
                </div>
                <h5>Smart Rent Management</h5>
                <p className="text-muted">Efficiently manage your rental properties with our tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-5 animate__animated animate__fadeIn" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div className="container-fluid">
          <h2 className="text-center mb-5 animate__animated animate__fadeInUp">How Buildex Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="step-card p-4 rounded text-center h-100 animate__animated animate__fadeInUp" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 16px rgba(15, 23, 42, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="step-number text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'bounce 2s infinite'
                }}>
                  1
                </div>
                <h5>Browse Properties</h5>
                <p className="text-muted">Explore our curated collection of verified properties for sale or rent.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card p-4 rounded text-center h-100 animate__animated animate__fadeInUp animate__delay-1s" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 16px rgba(15, 23, 42, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="step-number text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'bounce 2s infinite'
                }}>
                  2
                </div>
                <h5>Connect with Builders</h5>
                <p className="text-muted">Direct communication with verified builders and property managers.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card p-4 rounded text-center h-100 animate__animated animate__fadeInUp animate__delay-2s" style={{ 
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 16px rgba(15, 23, 42, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}>
                <div className="step-number text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--construction-gold)',
                  animation: 'bounce 2s infinite'
                }}>
                  3
                </div>
                <h5>Close the Deal</h5>
                <p className="text-muted">Complete your transaction with our secure and transparent process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;