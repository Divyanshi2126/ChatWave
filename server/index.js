import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js'; // Extension .js zaroori hai
import authRoutes from './src/routers/authRoutes.js';

// 1. Setup
dotenv.config();
const app = express();

// 2. Middlewares
app.use(cors()); // Frontend connection ke liye
app.use(express.json()); // JSON data read karne ke liye

// 3. Database Connection
connectDB();

// 4. Routes
app.use('/api/auth', authRoutes);

// 5. Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));