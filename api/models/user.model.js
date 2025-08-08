import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://www.needpix.com/photo/467175/blank-profile-picture-mystery-man-avatar-display-pic-profile-man-person-profile-icon-portrait",
    },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;