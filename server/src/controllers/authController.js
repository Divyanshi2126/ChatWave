import User from '../models/usermodel.js'; // .js extension lagana zaroori hai
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ fullname, email, password: hashedPassword });

        res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        res.status(200).json({ 
            message: "Login Successful", 
            user: { id: user._id, fullname: user.fullname } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};