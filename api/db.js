import { neon } from '@neondatabase/serverless';

// Initialize NeonDB connection with error handling
let sql;
try {
  const databaseUrl = import.meta.env.VITE_DATABASE_URL || process.env.VITE_DATABASE_URL;
  // Remove any 'psql' prefix if present
  const cleanUrl = databaseUrl ? databaseUrl.replace(/^psql\s+'(.*)'$/, '$1') : '';
  if (cleanUrl) {
    sql = neon(cleanUrl);
  } else {
    // Mock SQL function for development
    sql = async () => [];
    console.warn('No database URL provided, using mock database');
  }
} catch (error) {
  console.error('Failed to initialize database connection:', error);
  // Mock SQL function for development
  sql = async () => [];
}

export default sql;

// Initialize database tables
export async function initializeDatabase() {
  try {
    // Create users table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        full_name VARCHAR(100),
        phone VARCHAR(15),
        role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'builder', 'admin')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)`;

    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}
