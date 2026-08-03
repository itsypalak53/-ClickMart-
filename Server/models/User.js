import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone_no: {
        type: String
    },
    password: {
        type: String
    },
    profilePic: {
        type: String
    },
    userType: {
        type: String,
        enum: ["Admin", "Agency", "Customer"],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
});

const User = mongoose.model("User", UserSchema);

export default User;