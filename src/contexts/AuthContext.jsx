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
  const [pendingRegistration, setPendingRegistration] = useState(null);

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

  const BACKEND_URL = 'http://localhost:8080/api';

  const verifyOtp = async (email, otp) => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      const data = await response.json();

      if (response.ok && data.success) {
        // Backend verification successful. Now create user in local DB.
        if (!pendingRegistration || pendingRegistration.email !== email) {
          setLoading(false);
          return { success: false, message: "Registration session expired. Please try again." };
        }

        const { username, password, full_name, phone, role } = pendingRegistration;

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Insert new user into database
        const result = await sql`
            INSERT INTO users (username, email, password, full_name, phone, role)
            VALUES (${username}, ${email}, ${hashedPassword}, ${full_name}, ${phone}, ${role})
            RETURNING id, username, email, full_name, phone, role
        `;

        if (result.length === 0) {
          setLoading(false);
          return { success: false, message: "Failed to create user record." };
        }

        const newUser = result[0];
        setCurrentUser(newUser);
        localStorage.setItem('buildex_user', JSON.stringify(newUser));
        setPendingRegistration(null);
        setLoading(false);
        return { success: true, user: newUser };

      } else {
        setLoading(false);
        return { success: false, message: data.message || "Invalid OTP" };
      }
    } catch (error) {
      setLoading(false);
      console.error('OTP Verification Error:', error);
      return { success: false, message: "Failed to verify OTP. Service unavailable." };
    }
  };

  const register = async (username, email, password, fullName, phone, role = "user") => {
    setLoading(true);

    // 1. Check if user already exists in DB
    try {
      const existingUser = await sql`
        SELECT id FROM users WHERE email = ${email} OR username = ${username}
        `;

      if (existingUser.length > 0) {
        setLoading(false);
        return { success: false, message: "User with this email or username already exists" };
      }
    } catch (dbError) {
      console.warn("DB check failed", dbError);
      // Continue? If DB is unreadable, we probably can't register anyway.
      setLoading(false);
      return { success: false, message: "Database connection failed" };
    }

    // 2. Send OTP via Backend
    try {
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, full_name: fullName, phone, role })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Store pending data for later insertion
          setPendingRegistration({ username, email, password, full_name: fullName, phone, role });
          setLoading(false);
          return { success: true, requiresOtp: true, message: "OTP sent to email" };
        } else {
          setLoading(false);
          return { success: false, message: data.message || "Failed to send OTP" };
        }
      } else {
        setLoading(false);
        return { success: false, message: "Backend service error" };
      }
    } catch (backendError) {
      console.error("Backend registration failed", backendError);
      setLoading(false);
      return { success: false, message: "Registration service unavailable. Please check your connection." };
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
    verifyOtp,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};