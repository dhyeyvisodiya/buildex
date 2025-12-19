import React, { createContext, useContext, useState, useEffect } from 'react';
import sql from '../../api/db.js';
import { hashPassword, comparePassword } from '../../api/db.js';

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
        // Import the initializeDatabase function
        const { initializeDatabase } = await import('../../api/db.js');
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
      // Query the database for the user
      const result = await sql`
        SELECT id, username, email, full_name, phone, role, password 
        FROM users 
        WHERE email = ${email}
      `;
      
      if (result.length === 0) {
        setLoading(false);
        return { success: false, message: "Invalid email or password" };
      }
      
      const user = result[0];
      
      // Compare the provided password with the hashed password
      const isPasswordValid = await comparePassword(password, user.password);
      
      if (!isPasswordValid) {
        setLoading(false);
        return { success: false, message: "Invalid email or password" };
      }
      
      // Remove password from user object before storing
      const { password: _, ...userWithoutPassword } = user;
      
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('buildex_user', JSON.stringify(userWithoutPassword));
      setLoading(false);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      setLoading(false);
      console.error('Login error:', error);
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
      // Check if user already exists
      const existingUser = await sql`
        SELECT id FROM users WHERE email = ${email} OR username = ${username}
      `;
      
      if (existingUser.length > 0) {
        setLoading(false);
        return { success: false, message: "User with this email or username already exists" };
      }
      
      // Hash the password before storing
      const hashedPassword = await hashPassword(password);
      
      // Insert new user into database
      const result = await sql`
        INSERT INTO users (username, email, password, full_name, phone, role)
        VALUES (${username}, ${email}, ${hashedPassword}, ${fullName}, ${phone}, ${role})
        RETURNING id, username, email, full_name, phone, role
      `;
      
      if (result.length === 0) {
        setLoading(false);
        return { success: false, message: "Registration failed" };
      }
      
      const newUser = result[0];
      
      setCurrentUser(newUser);
      localStorage.setItem('buildex_user', JSON.stringify(newUser));
      setLoading(false);
      return { success: true, user: newUser };
    } catch (error) {
      setLoading(false);
      console.error('Registration error:', error);
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