# LIIT Backend - Strapi CMS

This is the backend API for the Liberia Institute of Innovation & Technology (LIIT) website, built with Strapi CMS.

## Features

- **Content Management**: Full CMS for managing programs, news, FAQs, testimonials
- **Student Portal**: Authentication and student data management
- **Form Handling**: Contact forms, enrollment applications, consultation requests
- **Media Management**: File uploads for documents and images
- **RESTful API**: Complete API endpoints for all content types

## Content Types

### Academic Content
- **Programs**: Academic programs with details, fees, duration
- **Courses**: Individual courses within programs
- **Assignments**: Course assignments and projects

### User Management
- **Students**: Student records for portal access
- **Enrollments**: Student enrollment applications
- **Users**: Extended user profiles with student information

### Communication
- **Contact**: Contact form submissions
- **Consultations**: Consulting service requests
- **News**: News articles and announcements
- **Testimonials**: Student success stories
- **FAQs**: Frequently asked questions

## Quick Start

1. **Install dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**:
   ```bash
   npm run develop
   ```

4. **Access admin panel**:
   - URL: http://localhost:1337/admin
   - Default admin: admin@liit.edu.lr / Admin123!

## API Endpoints

### Public Endpoints
- `GET /api/programs` - List all programs
- `GET /api/news` - List all news articles
- `GET /api/faqs` - List all FAQs
- `GET /api/testimonials` - List all testimonials
- `POST /api/enrollments` - Submit enrollment application
- `POST /api/contacts` - Submit contact form
- `POST /api/consultations` - Submit consultation request

### Student Portal
- `POST /api/students/login` - Student login
- `GET /api/courses` - List courses (authenticated)
- `GET /api/assignments` - List assignments (authenticated)

### Admin Endpoints
All content types have full CRUD operations available through the admin panel and API.

## Default Data

The system comes pre-seeded with:
- Sample academic programs
- Common FAQs
- Student testimonials
- Demo student account (LIST2024001 / demo123)
- Admin account (admin@liit.edu.lr / Admin123!)

## Configuration

### CORS
The backend is configured to accept requests from:
- http://localhost:5173 (Vite dev server)
- https://localhost:5173 (Vite dev server with HTTPS)

### Database
Uses SQLite by default for development. For production, configure PostgreSQL or MySQL in the environment variables.

### File Uploads
Supports image and document uploads for:
- Program images
- News article images
- Student profile pictures
- Enrollment documents
- Assignment attachments

## Production Deployment

1. **Environment Variables**:
   - Set secure APP_KEYS, JWT_SECRET, etc.
   - Configure production database
   - Set up email provider for notifications

2. **Build**:
   ```bash
   npm run build
   npm start
   ```

3. **Database Migration**:
   - Export data from development
   - Import to production database
   - Run any necessary migrations

## Security

- All sensitive endpoints require authentication
- File uploads are validated and restricted
- CORS is properly configured
- Passwords are hashed (in production setup)
- Rate limiting can be configured for production

## Support

For technical support or questions about the backend setup, contact the development team.