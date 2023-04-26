import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { addCategory, create_subCategory } from '../controller/categorycontroller.js';
import { getcategory } from '../controller/getcatagory.js';






const router = express.Router();


//routes

//GET USER ||GET



//POST JOB|| POST

router.post('/create-category', userAuth, addCategory);
router.post('/sub-category/:id', userAuth, create_subCategory);

router.get('/get-category', userAuth, getcategory);


// router.get('/get-job', userAuth, GetAllJob);

// router.put("/update-job/:id", userAuth, updatejob)

// router.delete("/delete-job/:id", userAuth, Deletejob)


export default router;