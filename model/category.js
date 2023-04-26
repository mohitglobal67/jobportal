
import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    catgeory: {
        type: String,
        required: true
    },
   

});
export default mongoose.model("Category", categorySchema);