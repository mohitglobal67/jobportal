import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken"

//Schema
const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    lastName: {
        type: String,

    },

    email: {
        type: String,
        required: [true, "Eamil is required"],
        unique: true,
        validate: validator.isEmail

    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "password too short minimum 8 digit"],
        select: true
    },
    location: {
        type: String,
        default: "india"
    }


}, { timestamps: true });

//middleware

userModel.pre('save', async function () {
    if (!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});


//Json WebToken

userModel.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}



//compare password
userModel.methods.comparePassword = async function (userPassword) {
    return bcrypt.compare(userPassword, this.password);

};

export default mongoose.model('User', userModel);