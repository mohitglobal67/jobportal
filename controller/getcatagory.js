
import SubcategoryModel from "../model/subCategory.js";
import category from "../model/category.js";

 

export const getcategory = async (req, res, next) => {

    
    try {
    
    
                     var send_data = [];
        var cat_data = await category.find();

        if (cat_data.length > 0) {

            for (var i = 0; i < cat_data.length; i++){
var Product_data = [];
                var cat_id = cat_data[i]['_id'].toString();
                const cat_product = await SubcategoryModel.find({ category_id: cat_id });
                
                if (cat_product.length > 0) {
                    for (var j = 0; j < cat_product.length; j++){
                        
                        
                          Product_data.push({
                         
                            "Sub_Category_name": cat_product[j]['sub_category'],
                            "Category_id": cat_product[j]['category_id'],
                      
                        });  
                    }
                }
                
                send_data.push({
                          "category": cat_data[i]['catgeory'],

                    "product": Product_data

                });
            }
             res.status(200).send({ seccess: true, msg: "product details", data: send_data })
            
        } else {
             res.status(200).send({ success: false, message: "Product details", data: send_data });
        }
        
    } catch (error) {
         res.status(400).send({ success: false, message: error.message });
    }


    

}