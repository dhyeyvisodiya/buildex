import React, { useState, useEffect } from 'react';
import { properties, cities, localities } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const PropertyList = ({ navigateTo, addToCompare, addToWishlist }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    type: '',
    purpose: '',
    city: '',
    locality: ''
  });
  const [localityOptions, setLocalityOptions] = useState([]);

  useEffect(() => {
    // Apply filters when they change
    let result = properties;
    
    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }
    
    if (filters.purpose) {
      result = result.filter(property => property.purpose === filters.purpose);
    }
    
    if (filters.city) {
      result = result.filter(property => property.city === filters.city);
    }
    
    if (filters.locality) {
      result = result.filter(property => property.locality === filters.locality);
    }
    
    setFilteredProperties(result);
  }, [filters]);

  useEffect(() => {
    // Update locality options when city changes
    if (filters.city && localities[filters.city]) {
      setLocalityOptions(localities[filters.city]);
    } else {
      setLocalityOptions([]);
    }
  }, [filters.city]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      purpose: '',
      city: '',
      locality: ''
    });
  };

  return (
    <div className="property-list-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <h1 className="mb-4 animate__animated animate__fadeInDown" style={{ color: '#C8A24A' }}>Find Your Perfect Property</h1>
        
        {/* Filter Section */}
        <div className="filter-section mb-4 animate__animated animate__fadeInUp">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label" style={{ color: '#334155' }}>Property Type</label>
              <select 
                className="form-select" 
                name="type" 
                value={filters.type}
                onChange={handleFilterChange}
                style={{
                  borderColor: '#CBD5E1',
                  borderRadius: '8px',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                  color: '#0B1220',
                  backgroundColor: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#9E7C2F'}
                onMouseLeave={(e) => e.target.style.borderColor = '#CBD5E1'}
              >
                <option value="">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            
            <div className="col-md-3">
              <label className="form-label" style={{ color: '#334155' }}>Purpose</label>
              <select 
                className="form-select" 
                name="purpose" 
                value={filters.purpose}
                onChange={handleFilterChange}
                style={{
                  borderColor: '#CBD5E1',
                  borderRadius: '8px',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                  color: '#0B1220',
                  backgroundColor: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#9E7C2F'}
                onMouseLeave={(e) => e.target.style.borderColor = '#CBD5E1'}
              >
                <option value="">Both</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            
            <div className="col-md-3">
              <label className="form-label" style={{ color: '#334155' }}>City</label>
              <select 
                className="form-select" 
                name="city" 
                value={filters.city}
                onChange={handleFilterChange}
                style={{
                  borderColor: '#CBD5E1',
                  borderRadius: '8px',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                  color: '#0B1220',
                  backgroundColor: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#9E7C2F'}
                onMouseLeave={(e) => e.target.style.borderColor = '#CBD5E1'}
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="col-md-3">
              <label className="form-label" style={{ color: '#334155' }}>Locality</label>
              <select 
                className="form-select" 
                name="locality" 
                value={filters.locality}
                onChange={handleFilterChange}
                disabled={!filters.city}
                style={{
                  borderColor: '#CBD5E1',
                  borderRadius: '8px',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                  color: '#0B1220',
                  backgroundColor: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = '#9E7C2F'}
                onMouseLeave={(e) => e.target.style.borderColor = '#CBD5E1'}
              >
                <option value="">All Localities</option>
                {localityOptions.map(locality => (
                  <option key={locality} value={locality}>{locality}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-3">
            <button 
              className="btn btn-outline-secondary" 
              onClick={clearFilters}
              style={{
                borderRadius: '8px',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                border: '1px solid #CBD5E1',
                color: '#475569',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#F1F5F9';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(15, 23, 42, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
        
        {/* Results Info */}
        <div className="d-flex justify-content-between align-items-center mb-3 animate__animated animate__fadeIn">
          <h5 style={{ color: '#C8A24A' }}>
            <span className="badge bg-primary" style={{ backgroundColor: '#C8A24A', color: '#0B1220' }}>
              {filteredProperties.length}
            </span> Properties Found
          </h5>
        </div>
        
        {/* Property Cards */}
        {filteredProperties.length > 0 ? (
          <div className="row g-4 animate__animated animate__fadeIn">
            {filteredProperties.map((property, index) => (
              <div className="col-lg-4 col-md-6 animate__animated animate__fadeInUp" key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PropertyCard 
                  property={property} 
                  navigateTo={navigateTo}
                  addToCompare={addToCompare}
                  addToWishlist={addToWishlist}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5 animate__animated animate__fadeIn">
            <div className="mb-4">
              <i className="bi bi-search" style={{ fontSize: '3rem', color: '#94A3B8' }}></i>
            </div>
            <h4 style={{ color: '#0B1220' }}>No properties found matching your criteria</h4>
            <p className="text-muted mb-4" style={{ color: '#64748B' }}>Try adjusting your filters to see more results</p>
            <button 
              className="btn btn-primary" 
              onClick={clearFilters}
              style={{
                background: 'linear-gradient(90deg, #C8A24A, #9E7C2F)',
                border: 'none',
                color: '#0B1220',
                boxShadow: '0 4px 12px rgba(158, 124, 47, 0.3)',
                transition: 'all 0.3s ease'
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
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;