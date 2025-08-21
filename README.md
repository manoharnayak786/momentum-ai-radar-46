# Momentum AI - Proactive Social Media Automation

The first proactive AI partner for social media management that scans the digital world for content opportunities 24/7.

## 🚀 Features

- **Proactive Content Radar**: Real-time trend monitoring and opportunity detection
- **AI Brand Voice Training**: Custom AI models trained on your brand's content
- **Multi-platform Content Generation**: Automated content creation for all social platforms
- **Protected Dashboard**: Secure user authentication and session management
- **Organization Management**: Multi-user workspaces with role-based access

## 🏗️ Architecture

This project follows a monorepo structure with separate frontend and backend services:

```
momentum-ai-radar-46/
├── src/                    # React + TypeScript frontend
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages
│   ├── context/           # React context providers
│   └── lib/               # Utilities and API client
├── server/                # Express + TypeScript backend
│   ├── src/
│   │   ├── modules/       # Feature modules (auth, users, orgs)
│   │   ├── middleware/    # Express middleware
│   │   ├── utils/         # Utility functions
│   │   └── config/        # Configuration files
│   └── prisma/           # Database schema
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **shadcn/ui** for component library

### Backend
- **Express.js** with TypeScript
- **Prisma ORM** with PostgreSQL/SQLite
- **JWT** for authentication (access + refresh tokens)
- **bcrypt** for password hashing
- **Zod** for input validation
- **CORS** and **Helmet** for security

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or SQLite for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd momentum-ai-radar-46
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Set up environment variables**
   
   Create `server/.env` from the example:
   ```bash
   cp server/.env.example server/.env
   ```
   
   Update the environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/momentum_ai"
   ACCESS_TOKEN_SECRET="your-super-secret-access-token-key"
   REFRESH_TOKEN_SECRET="your-super-secret-refresh-token-key"
   PORT=4000
   CORS_ORIGIN="http://localhost:8080"
   NODE_ENV="development"
   ```

5. **Set up the database**
   ```bash
   cd server
   npx prisma migrate dev
   npx prisma generate
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on http://localhost:4000

2. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   Application will run on http://localhost:8080

## 🔐 Authentication System

The application features a complete authentication system with:

### Features
- ✅ **User Registration** with email/password
- ✅ **User Login** with JWT tokens
- ✅ **Protected Routes** with automatic redirects
- ✅ **Session Management** with refresh tokens
- ✅ **Secure Logout** with token cleanup
- ✅ **User Profile** dropdown with account info
- ✅ **Organization Management** with default workspace creation

### API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/health` | Health check | No |
| POST | `/api/auth/register` | User registration | No |
| POST | `/api/auth/login` | User login | No |
| POST | `/api/auth/refresh` | Refresh access token | No |
| POST | `/api/auth/logout` | User logout | No |
| GET | `/api/users/me` | Get current user | Yes |
| GET | `/api/orgs` | List user organizations | Yes |
| POST | `/api/orgs` | Create organization | Yes |

### Authentication Flow

1. **Registration/Login**: User provides credentials
2. **Token Generation**: Server returns access token (15min) + refresh token (7 days)
3. **Token Storage**: Access token in localStorage, refresh token in HTTP-only cookie
4. **API Requests**: Access token included in Authorization header
5. **Token Refresh**: Automatic refresh when access token expires
6. **Logout**: Tokens cleared from storage and server

![Authentication System](https://github.com/user-attachments/assets/b1a959b9-e066-4d80-9449-7681333f8a3f)

## 🏢 Database Schema

```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  name         String
  passwordHash String
  createdAt    DateTime @default(now())
  
  memberships   Membership[]
  refreshTokens RefreshToken[]
}

model Organization {
  id        String   @id @default(cuid())
  name      String
  createdAt DateTime @default(now())
  
  memberships Membership[]
}

model Membership {
  id     String @id @default(cuid())
  userId String
  orgId  String
  role   Role   @default(MEMBER)
  
  user User         @relation(fields: [userId], references: [id])
  org  Organization @relation(fields: [orgId], references: [id])
  
  @@unique([userId, orgId])
}

enum Role {
  OWNER
  ADMIN
  MEMBER
}
```

## 🛡️ Security Features

- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Tokens**: Separate access and refresh tokens
- **Refresh Token Security**: SHA256 hashing before database storage
- **CORS Protection**: Configured for development origins
- **Input Validation**: Zod schemas for all API endpoints
- **Security Headers**: Helmet middleware for basic protections
- **Protected Routes**: Frontend route guards with authentication checks

## 🧪 Testing

### Manual Testing Checklist

- [x] User registration with email/password
- [x] User login with valid credentials  
- [x] Login rejection with invalid credentials
- [x] Automatic redirect to dashboard after login
- [x] Protected route access when authenticated
- [x] Protected route redirect when unauthenticated
- [x] User profile display in header
- [x] Logout functionality
- [x] Token refresh mechanism
- [x] Organization creation on registration

### API Testing

Test the API endpoints using curl:

```bash
# Health check
curl -X GET http://localhost:4000/api/health

# Register user
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'

# Login user  
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password123"}'

# Get user profile (requires token)
curl -X GET http://localhost:4000/api/users/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 📦 Build & Deployment

### Frontend Build
```bash
npm run build
```

### Backend Build
```bash
cd server
npm run build
npm start
```

### Production Environment

For production deployment:

1. Set `NODE_ENV=production`
2. Use a PostgreSQL database
3. Configure proper CORS origins
4. Use strong JWT secrets
5. Set up HTTPS
6. Configure proper logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
