
// const express = require('express')

//package Import

import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from "morgan";

import "express-async-errors"

//file import
import connectDb from "./config/db.js";



dotenv.config();


// Mongodb connect 
connectDb();

// rest object routing

const app = express()

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes import
import authroutes from './routes/authroutes.js'
import errorMiddelware from "./middlewares/errormiddleware.js";


app.use('/api/v1/auth', authroutes);




// Validation Middle ware

app.use(errorMiddelware);

//listen server 

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`live on ${process.env.DEV_MODE} Mode on port no ${PORT} `);
}) 