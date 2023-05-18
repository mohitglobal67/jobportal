import product_details from "../model/product_details.js";

import Wishlist from "../model/wishlist_model.js";

export const ProductController = async (req, res, next) => {
    
    const { Name, Discription, Price } = req.body;

    if (!Name, !Discription, !Price) {
        next("Field Can't Empty")
    }

   try {
        const check_sub = await product_details.find({ Name: req.body.Name });

        if (check_sub.length > 0) {  
            let checking = false;
            for (let i = 0; i < check_sub.length; i++) {
                if (check_sub[i]['Name'].toLowerCase() === req.body.Name.toLowerCase()) {

                    checking = true;
                    break;

                }
            }
            if (checking === false) {
                const subCategory = new product_details({
                   
                    Name: req.body.Name,
                    Discription: req.body.Discription,
                    Price: req.body.Price,
                    sub_categoryId:req.params.id
                    
                });

                const sub_cat_data = await subCategory.save();

                res.status(200).send({
                    success: true,
                    msg: "Product Data", data: sub_cat_data
                })


            } else {
                res.status(200).send({
                    success: true,
                    msg: "Your sub Category " + req.body.sub_category + "" + " Already exits"
                })

            }


        } else {
            const subCategory = new product_details({
               Name: req.body.Name,
                    Discription: req.body.Discription,
                    Price: req.body.Price,
                    sub_categoryId:req.params.id
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

export const GetProduct = async (req, res, next) => {
    const { id } = req.params;

    const allproduct = await product_details.find({ sub_categoryId: id});

    res.status(200).json({
        total_product : allproduct.length,
        allproduct,
        
    })
    
}

export const AddwishList = async (req, res, next) => {

const  id  = req.params.id;
  let wishList = await Wishlist.findOne({ user: req.user.userId });
  if (!wishList) {
    wishList = new Wishlist({
      user: req.user.userId,
    });
  }
  wishList.products.addToSet(id);
  await wishList.save();
  res.status(200).json({
    message: "product addedd to wishlist Successfully",
  });
    
}
 

export const  myWishlist = async (req, res, next) => {
  let myList = await Wishlist.findOne({ user: req.user.userId}).populate(
    "products"
  );

  if (!myList) {
    myList = await Wishlist.create({
      user: req.user.userId,
    });
  }
  res.status(200).json({
    success: true,
    wishlist: myList,
  });
};

