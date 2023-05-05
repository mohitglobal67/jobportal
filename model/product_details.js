import mongoose from "mongoose";

const ProductDetails = mongoose.Schema({

    Name: {
        type: String,
        required: [true, "Name is required"]
    },
    Discription: {
        type: String,
        required: [true, "Discription is required"]
    },
    Price: {
        type: String,
        required: [true, "Price is required"]
        
    },

      sub_categoryId: {
      type: String,
        required: true
    },
}, { timestamps: true });

export default mongoose.model('Product', ProductDetails)
