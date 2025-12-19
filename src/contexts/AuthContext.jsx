import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize database on mount
  useEffect(() => {
    const initDB = async () => {
      try {
        // Mock database initialization for now
        console.log('Database initialized');
      } catch (error) {
        console.error('Failed to initialize database:', error);
      }
    };
    initDB();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    
    try {
      // Mock login for now
      const mockUser = {
        id: 1,
        username: 'demo',
        email: email,
        fullName: 'Demo User',
        phone: '+919999999999',
        role: 'user'
      };
      
      setCurrentUser(mockUser);
      localStorage.setItem('buildex_user', JSON.stringify(mockUser));
      setLoading(false);
      return { success: true, user: mockUser };
    } catch (error) {
      setLoading(false);
      return { success: false, message: error.message || "Invalid email or password" };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('buildex_user');
  };

  const register = async (username, email, password, fullName, phone, role = "user") => {
    setLoading(true);
    
    try {
      // Mock registration for now
      const mockUser = {
        id: Date.now(),
        username: username,
        email: email,
        fullName: fullName,
        phone: phone,
        role: role
      };
      
      setCurrentUser(mockUser);
      localStorage.setItem('buildex_user', JSON.stringify(mockUser));
      setLoading(false);
      return { success: true, user: mockUser };
    } catch (error) {
      setLoading(false);
      return { success: false, message: error.message || "Registration failed" };
    }
  };

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('buildex_user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('buildex_user');
      }
    }
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};