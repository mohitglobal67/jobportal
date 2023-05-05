import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { GetProduct, ProductController } from '../controller/product_controller.js';









const router = express.Router();


//routes

//GET USER ||GET



//POST JOB|| POST


router.post('/product/:id', userAuth, ProductController);
router.get('/productall/:id', userAuth, GetProduct);




// router.get('/get-job', userAuth, GetAllJob);

// router.put("/update-job/:id", userAuth, updatejob)

// router.delete("/delete-job/:id", userAuth, Deletejob)


export default router;