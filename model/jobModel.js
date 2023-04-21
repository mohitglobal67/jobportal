import mongoose from "mongoose";


const jobModel = mongoose.Schema({
    company: {
        type: String,
        required: [true, "company is required"]
    },
    position: {
        type: String,
        required: [true, "company is required"],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ['pending', 'reject', 'interview'],
        default: 'pending',
    },
    worktype: {
        type: String,
        enum: ['full-time', 'Part-time', 'InternShip'],
        default: "full-time",
    },

    WorkLocation: {
        type: String,
        enum: ['Delhi', 'Mumbai', 'Noida'],
        default: "Mumbai",
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },

}, { timestamps: true });

export default mongoose.model('Job', jobModel);