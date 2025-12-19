import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Register = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Username validation
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }
    
    // Full name validation
    if (fullName.length < 2) {
      setError('Full name must be at least 2 characters long');
      return;
    }
    
    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    // Password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const result = await register(username, email, password, fullName, phone, role);
      if (result.success) {
        onRegisterSuccess(result.user);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page animate__animated animate__fadeIn" style={{ 
      minHeight: 'calc(100vh - 100px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--charcoal-slate) 0%, #1E293B 100%)'
    }}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card" style={{ 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              border: '1px solid var(--card-border)'
            }}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 style={{ color: 'var(--primary-text)' }}>Create Account</h2>
                  <p className="text-muted" style={{ color: 'var(--muted-text)' }}>Join Buildex today</p>
                </div>

                {error && (
                  <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {loading && (
                    <div className="text-center mb-3">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2">Creating account...</p>
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label" style={{ color: 'var(--secondary-text)' }}>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      required
                      placeholder="Choose a username"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label" style={{ color: 'var(--secondary-text)' }}>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label" style={{ color: 'var(--secondary-text)' }}>Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: 'var(--secondary-text)' }}>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{ color: 'var(--secondary-text)' }}>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      required
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label" style={{ color: 'var(--secondary-text)' }}>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                      required
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label" style={{ color: 'var(--secondary-text)' }}>Account Type</label>
                    <select
                      className="form-select"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{
                        borderColor: 'var(--section-divider)',
                        borderRadius: '8px',
                        padding: '10px',
                        color: 'var(--primary-text)',
                        backgroundColor: 'var(--card-bg)'
                      }}
                    >
                      <option value="user">Regular User</option>
                      <option value="builder">Builder/Developer</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                    style={{
                      borderRadius: '8px',
                      fontWeight: '600',
                      padding: '12px',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))',
                      border: 'none',
                      color: 'var(--primary-text)'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.target.style.background = 'var(--deep-bronze)';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(158, 124, 47, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.target.style.background = 'linear-gradient(90deg, var(--construction-gold), var(--deep-bronze))';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(158, 124, 47, 0.3)';
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="mb-0" style={{ color: 'var(--muted-text)' }}>
                    Already have an account?{' '}
                    <button 
                      className="btn btn-link p-0 text-decoration-none" 
                      style={{ color: 'var(--construction-gold)' }}
                      onClick={() => window.location.hash = '/login'}
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;