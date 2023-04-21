import jobModel from "../model/jobModel.js";

export const JobController = async (req, res, next) => {

    const { company, position, } = req.body;
    if (!company, !position) {
        next("Field Can't Empty")
    }

    // const data = await { user: req.user.userId }
    req.body.createdBy = req.user.userId;


    console.log("fjhbjl" + req.user.userId);

    const job = await jobModel.create(req.body)

    res.status(201).json({
        job
    })




}


export const GetAllJob = async (req, res, next) => {

    const jobdata = await jobModel.find({ createdBy: req.user.userId });


    res.status(200).json({
        totaljob: jobdata.length,
        jobdata
    })

}
