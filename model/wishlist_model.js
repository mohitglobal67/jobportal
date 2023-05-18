import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  products: {
    type: [mongoose.Types.ObjectId],
    ref: "Product"
  }
});

export default mongoose.model("Wishlist", wishlistSchema);