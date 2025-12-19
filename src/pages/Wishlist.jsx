import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Wishlist = ({ wishlist, removeFromWishlist, navigateTo }) => {
  return (
    <div className="wishlist-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4 animate__animated animate__fadeInDown">
          <h1 style={{ color: '#C8A24A' }}>Your Wishlist</h1>
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
            Browse More Properties
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-5 animate__animated animate__fadeIn">
            <div className="mb-4">
              <i className="bi bi-heart" style={{ fontSize: '3rem', color: 'var(--secondary-text)' }}></i>
            </div>
            <h3 style={{ color: '#C8A24A' }}>Your wishlist is empty</h3>
            <p style={{ color: 'var(--muted-text)' }}>Save properties that interest you by clicking the heart icon</p>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => navigateTo('property-list')}
              style={{
                borderRadius: '8px',
                fontWeight: '600',
                padding: '10px 20px',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))',
                border: 'none',
                color: 'var(--primary-text)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--deep-bronze)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 16px rgba(158, 124, 47, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
              }}
            >
              Explore Properties
            </button>
          </div>
        ) : (
          <div className="row g-4 animate__animated animate__fadeIn">
            {wishlist.map((property, index) => (
              <div className="col-lg-4 col-md-6 animate__animated animate__fadeInUp" key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="position-relative">
                  <PropertyCard 
                    property={property} 
                    navigateTo={navigateTo}
                    addToCompare={() => {}}
                    addToWishlist={() => {}}
                  />
                  <button 
                    className="btn btn-danger position-absolute"
                    style={{ 
                      top: '10px', 
                      right: '10px',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0',
                      transition: 'all 0.3s ease',
                      background: 'var(--danger-color)',
                      border: 'none'
                    }}
                    onClick={() => removeFromWishlist(property.id)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;