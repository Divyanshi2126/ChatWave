import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ye line hona bahut zaroori hai

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI; // .env se URL uthayega
        if(!url) {
            console.log("❌ MONGO_URI nahi mil rahi! .env file check karein.");
            return;
        }
        await mongoose.connect(url);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.log("❌ MongoDB Connection Error:", error.message);
    }
};

export default connectDB;