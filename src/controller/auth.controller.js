const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler")

let registerController = asyncHandler(async(req,res)=>{

   let result=await registerController(req.body)
 
     return res.status(201).json(

    new apiResponse(201,"user registered successfully",result)

     )
        




    
})

module.exports={registerController}