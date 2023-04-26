
import mongoose from "mongoose";


const subCategorySchema = mongoose.Schema({
    category_id: {
        type: String,
        required: true
    },  
      sub_category: {
      type: String,
        required: true
    },

})

export default mongoose.model("Subcategory", subCategorySchema);