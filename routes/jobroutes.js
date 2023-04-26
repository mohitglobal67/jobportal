import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { Deletejob, GetAllJob, JobController, updatejob } from '../controller/jobController.js';





const router = express.Router();


//routes

//GET USER ||GET



//POST JOB|| POST

router.post('/create-job', userAuth, JobController);

router.get('/get-job', userAuth, GetAllJob);

router.put("/update-job/:id", userAuth, updatejob)

router.delete("/delete-job/:id", userAuth, Deletejob)


export default router;