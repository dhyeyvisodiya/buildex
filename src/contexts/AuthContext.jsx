import React, { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, loginUser } from '../../api/auth.js';
import { initializeDatabase } from '../../api/db.js';

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
        await initializeDatabase();
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
      const result = await loginUser({ email, password });
      
      if (result.success) {
        setCurrentUser(result.user);
        // Store user in localStorage
        localStorage.setItem('buildex_user', JSON.stringify(result.user));
        setLoading(false);
        return { success: true, user: result.user };
      }
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
      const result = await registerUser({ 
        username, 
        email, 
        password, 
        fullName, 
        phone, 
        role 
      });
      
      if (result.success) {
        setCurrentUser(result.user);
        // Store user in localStorage
        localStorage.setItem('buildex_user', JSON.stringify(result.user));
        setLoading(false);
        return { success: true, user: result.user };
      }
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