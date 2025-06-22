-- PostgreSQL Database Setup for LIIT
-- Run this script to set up the production database

-- Create database
CREATE DATABASE liit_production;

-- Create user
CREATE USER liit_user WITH PASSWORD 'your_secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE liit_production TO liit_user;

-- Connect to the database
\c liit_production;

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO liit_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO liit_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO liit_user;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO liit_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO liit_user;