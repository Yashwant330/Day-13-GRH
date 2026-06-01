const userModel = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler")

let registerController = asyncHandler(async(req,res)=>{
    try {
        let{name,email,password}=req.body;

    if(!name  || !email || !password)
     return res.status(400).json({
    message:"All fields are required"
    })   

    let user = await userModel.create({
        name,
        email,
        password,

    })
 
     return res.status(201).json({
        message:"User registered"
     })
        



    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
})

module.exports={registerController}