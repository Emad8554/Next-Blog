const { default: mongoose, mongo } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            unique: true,
        },
        lastName: {
            type: String,
            unique: true,
        },
        profilePicture: {
            type: String,
            unique: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
)

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;