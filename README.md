# LIIT - Liberia Institute of Innovation & Technology

A complete educational institution website built with React and Strapi CMS.

## 🚀 Features

### Frontend (React)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Smooth animations with Framer Motion
- **Dynamic Content**: Real-time data from Strapi CMS
- **Form Handling**: React Hook Form with validation
- **Student Portal**: Authentication and course management
- **SEO Optimized**: Meta tags and structured data

### Backend (Strapi CMS)
- **Content Management**: Full admin panel for content editing
- **API Endpoints**: RESTful APIs for all content types
- **Email Notifications**: Automated emails for form submissions
- **File Uploads**: Image and document management
- **User Authentication**: Student portal login system
- **Database Support**: SQLite (dev) / PostgreSQL (production)

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL (for production)

### Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd liit-website
```

2. **Install dependencies**
```bash
npm run setup
```

3. **Environment Setup**
```bash
# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env

# Update environment variables
# Edit .env and backend/.env with your configuration
```

4. **Start Development Servers**
```bash
# Start both frontend and backend
npm run start:all

# Or start individually
npm run dev              # Frontend only
npm run backend:dev      # Backend only
```

5. **Access the Application**
- Frontend: http://localhost:5173
- Backend Admin: http://localhost:1337/admin
- API Documentation: http://localhost:1337/documentation

### Production Setup

1. **Database Setup (PostgreSQL)**
```bash
# Run the database setup script
psql -U postgres -f backend/database-setup.sql
```

2. **Environment Configuration**
```bash
# Update backend/.env for production
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_NAME=liit_production
DATABASE_USERNAME=liit_user
DATABASE_PASSWORD=your_secure_password

# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

3. **Build and Deploy**
```bash
# Build frontend
npm run build

# Build backend
npm run backend:build

# Start production backend
npm run backend:start
```

## 📁 Project Structure

```
liit-website/
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── hooks/             # Custom hooks
│   └── layouts/           # Layout components
├── backend/               # Strapi CMS
│   ├── src/
│   │   ├── api/          # API endpoints
│   │   ├── admin/        # Admin customization
│   │   └── extensions/   # Plugin extensions
│   ├── config/           # Configuration files
│   └── public/           # Static assets
└── docs/                 # Documentation
```

## 🔧 Configuration

### Email Setup
1. **Gmail Setup**:
   - Enable 2-factor authentication
   - Generate app password
   - Update SMTP credentials in backend/.env

2. **Custom SMTP**:
   - Update SMTP_HOST, SMTP_PORT in backend/.env
   - Configure authentication credentials

### Database Configuration
- **Development**: SQLite (default)
- **Production**: PostgreSQL (recommended)
- Update DATABASE_* variables in backend/.env

### File Uploads
- **Development**: Local storage
- **Production**: Configure cloud storage (AWS S3, Cloudinary)

## 📧 Email Notifications

The system sends automated emails for:
- **Enrollment Applications**: Confirmation to student, notification to admin
- **Contact Form**: Auto-reply to sender, notification to staff
- **Consultation Requests**: Confirmation to client, notification to team

## 🎨 Customization

### Admin Panel Branding
- Logo: Replace `backend/public/logo.png`
- Colors: Update `backend/src/admin/app.js`
- Text: Modify translations in admin config

### Frontend Styling
- Colors: Update Tailwind config
- Components: Modify component files
- Layout: Update layout components

## 📊 Content Management

### Admin Access
- URL: http://localhost:1337/admin
- Default: admin@liit.edu.lr / Admin123!

### Content Types
- **Programs**: Academic programs and courses
- **News**: Articles and announcements  
- **FAQs**: Frequently asked questions
- **Testimonials**: Student success stories
- **Enrollments**: Application submissions
- **Contacts**: Contact form submissions

## 🔐 Security

- Environment variables for sensitive data
- CORS configuration for API access
- Input validation and sanitization
- Secure password hashing
- Rate limiting on API endpoints

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build: `npm run build`
2. Deploy `dist/` folder
3. Set environment variables

### Backend (Heroku/DigitalOcean)
1. Set up PostgreSQL database
2. Configure environment variables
3. Deploy Strapi application
4. Run database migrations

## 📈 Performance

- **Frontend**: Code splitting, lazy loading, image optimization
- **Backend**: Database indexing, caching, API optimization
- **SEO**: Meta tags, structured data, sitemap

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

- **Email**: dev@liit.edu.lr
- **Documentation**: /docs
- **Issues**: GitHub Issues

## 📄 License

This project is licensed under the MIT License.