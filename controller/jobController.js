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

// Update Jobs

export const updatejob = async (req, res, next) => {
    const { id } = req.params;


    const { company, position, } = req.body;
    if (!company, !position) {
        next("Field Can't Empty")
    }
    // find job
    const jobdata = await jobModel.findOne({ _id: id });
    //Validation 
    if (!jobdata) {
        next(`no job found with this is ${id}`)
    }

    if (!req.user.userId === jobdata.createdBy.toString()) {
        next("Yoy are not Authorize to update");
        return;
    }

    const updatejobdata = await jobModel.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })

    res.status(200).json({
        updatejobdata,

    });
}

export const Deletejob = async (req, res, next) => {
    const { id } = req.params;
    
 //   findjob based on id
    
    const job = await jobModel.findOne({ _id: id });
    if (!job) {
        next(`no job found this id ${id}`)
    }

    if (!req.user.userId === job.createdBy.toString()) {
        next("You are not authorize to delete")
        return;
    }

    await job.deleteOne();
    res.status(200).json({
    message:"Job Deleted Succesfully"
    })
     
};
