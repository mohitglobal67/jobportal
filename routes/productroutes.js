import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { AddwishList, GetProduct, ProductController, myWishlist } from '../controller/product_controller.js';
import { createProductController, getProductController } from '../controller/productcontroller.js';
 import formidable from "express-formidable";


const router = express.Router();


//routes

//GET USER ||GET



//POST JOB|| POST


router.post('/product/:id', userAuth, ProductController);
router.get('/productall/:id', userAuth, GetProduct);
router.post('/addwishlist/:id', userAuth, AddwishList);
router.get('/getwishlist', userAuth, myWishlist);



// productdata


//routes
router.post(
  "/create-product",
  formidable(),
  createProductController
);

router.get(
  "/get-product",
  formidable(),
  getProductController
);


// router.get('/get-job', userAuth, GetAllJob);

// router.put("/update-job/:id", userAuth, updatejob)

// router.delete("/delete-job/:id", userAuth, Deletejob)


export default router;