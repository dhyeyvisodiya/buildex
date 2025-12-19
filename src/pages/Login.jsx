import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const result = await login(email, password);
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page animate__animated animate__fadeIn" style={{ 
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
                  <h2 style={{ color: 'var(--primary-text)' }}>Welcome to Buildex</h2>
                  <p className="text-muted" style={{ color: 'var(--muted-text)' }}>Sign in to your account</p>
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
                      <p className="mt-2">Signing in...</p>
                    </div>
                  )}
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
                      placeholder="Enter your email"
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
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      style={{ borderColor: 'var(--section-divider)' }}
                    />
                    <label className="form-check-label" htmlFor="remember" style={{ color: 'var(--muted-text)' }}>
                      Remember me
                    </label>
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
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="mb-0" style={{ color: 'var(--muted-text)' }}>
                    Don't have an account?{' '}
                    <button 
                      className="btn btn-link p-0 text-decoration-none" 
                      style={{ color: 'var(--construction-gold)' }}
                      onClick={() => window.location.hash = '/register'}
                    >
                      Register here
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

export default Login;