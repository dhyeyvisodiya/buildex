import sql from './db.js';
import bcrypt from 'bcryptjs';

// Register a new user
export async function registerUser({ username, email, password, fullName, phone, role = 'user' }) {
  try {
    // Validate input
    if (!username || !email || !password) {
      throw new Error('Username, email, and password are required');
    }

    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email} OR username = ${username}
    `;

    if (existingUser.length > 0) {
      throw new Error('User already exists with this email or username');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await sql`
      INSERT INTO users (username, email, password, full_name, phone, role)
      VALUES (${username}, ${email}, ${hashedPassword}, ${fullName || null}, ${phone || null}, ${role})
      RETURNING id, username, email, full_name, phone, role, created_at
    `;

    const user = result[0];
    
    return {
      success: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.full_name,
        phone: user.phone,
        role: user.role,
        createdAt: user.created_at
      }
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}

// Login user
export async function loginUser({ email, password }) {
  try {
    // Validate input
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Find user by email
    const result = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

    if (result.length === 0) {
      throw new Error('Invalid email or password');
    }

    const user = result[0];

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    // Return user data (without password)
    return {
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.full_name,
        phone: user.phone,
        role: user.role
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

// Get user by ID
export async function getUserById(userId) {
  try {
    const result = await sql`
      SELECT id, username, email, full_name, phone, role, created_at 
      FROM users 
      WHERE id = ${userId}
    `;

    if (result.length === 0) {
      throw new Error('User not found');
    }

    const user = result[0];
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.full_name,
      phone: user.phone,
      role: user.role,
      createdAt: user.created_at
    };
  } catch (error) {
    console.error('Get user error:', error);
    throw error;
  }
}
