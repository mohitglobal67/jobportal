import express from "express";
import { loginController, registerConroller } from "../controller/authcontroller.js";
import userAuth from "../middlewares/authmiddleware.js";

const router = express.Router();



// routes


//REGISTER || POST
router.post('/register', registerConroller)

// LOGIN || POST
router.post('/login', loginController)

//export

export default router;
