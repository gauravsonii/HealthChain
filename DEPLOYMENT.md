# HealthChain AI - Deployment Guide

## Project Structure
This is a full-stack healthcare management system with:
- **Client**: Next.js frontend (React + TypeScript)
- **Server**: Node.js/Express backend with MongoDB
- **Blockchain**: Smart contracts for healthcare data management

## Local Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Installation
1. Clone the repository:
```bash
git clone https://github.com/gauravsonii/HealthChain.git
cd HealthChain
```

2. Install dependencies:
```bash
npm run install:all
```

3. Set up environment variables:
Create a `.env` file in the `server` directory with:
```
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/healthchain
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=90d
CORS_ORIGIN=http://localhost:3000
```

4. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Vercel Deployment

### Frontend Deployment
1. Connect your GitHub repository to Vercel
2. Set the root directory to `client`
3. Build command: `npm run build`
4. Output directory: `.next`

### Backend Deployment
1. Deploy the server separately or use Vercel's serverless functions
2. Set environment variables in Vercel dashboard
3. Ensure MongoDB Atlas connection is configured

### Environment Variables for Vercel
Set these in your Vercel project settings:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure JWT secret
- `JWT_EXPIRES_IN`: Token expiration time
- `CORS_ORIGIN`: Your frontend URL

## Production Considerations
- Use MongoDB Atlas for production database
- Set up proper CORS configuration
- Configure JWT secrets securely
- Set up proper error handling and logging
- Consider using a CDN for static assets

## Troubleshooting
- Ensure all environment variables are set correctly
- Check MongoDB connection
- Verify CORS settings for frontend-backend communication
- Check console logs for any missing dependencies
