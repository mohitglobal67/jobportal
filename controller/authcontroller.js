import userModel from "../model/userModel.js";


export const registerConroller = async (req, res, next) => {
    // try {

    const { name, email, password } = req.body;
    if (!name) {
        next("name is required")
    }
    if (!email) {
        next("Email is required")

    }
    if (!password) {
        next("Password is required")
    }

    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
        next("User Already Exit")

    }

    const user = await userModel.create({ name, email, password });

    //Token
    const token = user.createJWT();

    res.status(201).send({
        success: true,
        message: "user created Succesfully",
        user: {

            name: user.name,
            lastName: user.lastName,
            email: user.email,
            location: user.location,
        },
        token
    })

    // } catch (error) {
    //     next(error);
    //     // console.log(error);
    //     // res.status(400).send({ 
    //     //     message: "Error in register",
    //     //     success: false,
    //     //     error

    //     // })

    // }
}


// export const loginController = async (req, res, next) => {


//     const { email, password } = req.body;

//     if (!email || !password) {
//         next("Please provide all Fieds")
//     }

//     //Find User By Email

//     const user = await userModel.findOne({ email }).select("+password")

//     if (!user) {

//         next("Invalid UserName And Password")
//     }

//     //Compare Password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//         next("Wrong password");
//     }

//     user.password = undefined;
//     const token = user.createJWT();

//     res.status(200).json({
//         // success: true,
//         // message: "Login Succesfully",
//         // user: {
//         //     name: user.name
//         // },
//         token
//     })

// };

export const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
        next("Please Provide All Fields");
    }
    //find user by email
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
        next("Invalid Useraname or password");
    }
    //compare password
    const isdata = await user.comparePassword(password);
    if (!isdata) {
        next("Invalid  password");
    } else {
        user.password = undefined;

        const token = user.createJWT();

        res.status(200).send({
            success: true,
            message: "Login SUccessfully",
            user,
            token,
        });

    }

    // if (isMatch) {
    //     res.status(200).json({
    //         success: true,
    //         message: "Login SUccessfully",
    //         user,
    //         token,
    //     });
    // } else {
    //     res.status(400).json({
    //         success: false,
    //         message: "Login faield",

    //     });
    // }

};