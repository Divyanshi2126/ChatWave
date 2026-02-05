import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        // REQUIRED HATAYA HAI: Taaki Google login wale users bina password ke save ho sakein
        minlength: 6
    },
    // GOOGLE DATA: Ye do fields add karna zaroori hai
    googleId: {
        type: String,
        default: null
    },
    profilePic: {
        type: String,
        default: ""
    }
}, { timestamps: true }); 

const User = mongoose.model('User', userSchema);

export default User;