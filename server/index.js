import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routers/authRoutes.js';

// 1. Setup
dotenv.config();
const app = express();

// 2. Middlewares (Is section ko dhyan se update karein)
app.use(cors({
    origin: "http://localhost:5173", // Aapke frontend ka exact URL
    credentials: true,               // Ye cookies aur headers allow karega
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); 

// 3. Database Connection
connectDB();

// 4. Routes
app.use('/api/auth', authRoutes);

// 5. Port
const PORT = process.env.PORT || 4500; // Aapne 4500 bola tha, toh wahi rakhein
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));