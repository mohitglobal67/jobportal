import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { GetAllJob, JobController } from '../controller/jobController.js';





const router = express.Router();


//routes

//GET USER ||GET



//POST JOB|| POST

router.post('/create-job', userAuth, JobController);

router.get('/get-job', userAuth, GetAllJob);




export default router;