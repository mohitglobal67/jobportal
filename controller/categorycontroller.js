import Category from "../model/category.js";
import SubcategoryModel from "../model/subCategory.js";

export const addCategory = async (req, res, next) => {
    try {

        const category_data = await Category.find();



        if (category_data.length > 0) {


            let checking = false;

            for (let i = 0; i < category_data.length; i++) {


                if (category_data[i]['catgeory']=== req.body.category.toLowerCase()) {


                    checking = true;
                    break;
                }

            }

            if (checking == false) {
                const category = new Category ({
                    catgeory: req.body.category

                });
                const cat_data = await category.save();
                res.status(200).send({ success: true, msg: "data", data: cat_data });
            } else {

                res.status(200).send({ success: true, msg: "This Category (" + req.body.category + ") is already exit" });
            }

        } else {
            const category = new Category({
                catgeory: req.body.category

            });
            const cat_data = await category.save();
            res.status(200).send({ success: true, msg: "data", data: cat_data });
        }



    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}


export const create_subCategory = async (req, res, next) => {

    try {
        const check_sub = await SubcategoryModel.find({ sub_category: req.body.sub_category });

        if (check_sub.length > 0) {  
            let checking = false;
            for (let i = 0; i < check_sub.length; i++) {
                if (check_sub[i]['sub_category'].toLowerCase() === req.body.sub_category.toLowerCase()) {

                    checking = true;
                    break;

                }
            }
            if (checking === false) {
                const subCategory = new SubcategoryModel({
                    category_id: req.params.id,
                    sub_category: req.body.sub_category
                });

                const sub_cat_data = await subCategory.save();

                res.status(200).send({
                    success: true,
                    msg: "Subcategory data", data: sub_cat_data
                })


            } else {
                res.status(200).send({
                    success: true,
                    msg: "Your sub Category " + req.body.sub_category + "" + " Already exits"
                })

            }


        } else {
            const subCategory = new SubcategoryModel({
                category_id: req.params.id,
                sub_category: req.body.sub_category
            });

            const sub_cat_data = await subCategory.save();
            res.status(200).send({
                success: true,
                msg: "Subcategory data", data: sub_cat_data
            })

        }


    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message,
        })

    }



}

export const  get_categoryData = () => {
    try {
        return Category.find();

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });

    }
}



