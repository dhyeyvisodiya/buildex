import React from 'react';
import PropertyCard from '../components/PropertyCard';

const CompareProperties = ({ compareList, removeFromCompare, navigateTo }) => {
  if (compareList.length === 0) {
    return (
      <div className="container-fluid py-5">
        <div className="text-center animate__animated animate__fadeIn">
          <h2 style={{ color: '#C8A24A' }}>No Properties to Compare</h2>
          <p style={{ color: '#64748B' }}>Add properties to compare them side by side</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigateTo('property-list')}
            style={{
              borderRadius: '8px',
              fontWeight: '600',
              padding: '10px 20px',
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
            Browse Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="compare-properties-page animate__animated animate__fadeIn">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4 animate__animated animate__fadeInDown">
          <h1 style={{ color: '#C8A24A' }}>Compare Properties</h1>
          <button 
            className="btn btn-outline-primary"
            onClick={() => navigateTo('property-list')}
            style={{
              borderRadius: '8px',
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
            Add More Properties
          </button>
        </div>

        {compareList.length > 0 && (
          <div className="table-responsive animate__animated animate__fadeInUp">
            <table className="table table-bordered" style={{ 
              borderRadius: '12px', 
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
            }}>
              <thead className="table-primary" style={{ backgroundColor: '#F5F0E6' }}>
                <tr>
                  <th scope="col" style={{ color: '#0B1220', fontWeight: '600' }}>Feature</th>
                  {compareList.map(property => (
                    <th key={property.id} className="text-center" style={{ minWidth: '200px' }}>
                      <div className="d-flex flex-column align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-danger mb-2"
                          onClick={() => removeFromCompare(property.id)}
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
                          Remove
                        </button>
                        <span style={{ color: '#0B1220', fontWeight: '600' }}>{property.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Price</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B', fontWeight: '500' }}>
                      {property.purpose === 'Buy' ? property.price : property.rent}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Type</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.type}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Area</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.area}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>City</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.city}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Locality</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.locality}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Possession</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.possession}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Amenities</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center" style={{ color: '#64748B' }}>
                      {property.amenities && property.amenities.join(', ')}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" style={{ color: '#0B1220', fontWeight: '600' }}>Actions</th>
                  {compareList.map(property => (
                    <td key={property.id} className="text-center">
                      <button 
                        className="btn btn-primary me-1"
                        onClick={() => navigateTo('property-detail', property)}
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
                        View Details
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareProperties;