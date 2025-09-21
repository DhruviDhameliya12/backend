# Employee Management Backend API

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb://localhost:27017/employee-management
   # Or for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employee-management
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## 🌐 API Endpoints

The API runs on `http://localhost:8000` (development) or your Render URL (production).

## 🚀 Deployment on Render

This project is configured for deployment on Render. Here's how to deploy:

### 1. Connect to Render
1. Sign up/Login to [Render](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service

### 2. Configure Build Settings
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment**: Node

### 3. Environment Variables
Add the following environment variables in Render dashboard:
- `MONGO_URI`: Your MongoDB connection string
- `NODE_ENV`: `production`

### 4. Deploy
- Render will automatically build and deploy your application
- Your API will be available at the provided Render URL

## 🔧 Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests (currently not implemented)