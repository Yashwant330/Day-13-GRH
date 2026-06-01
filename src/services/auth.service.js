let registerService=async(data)=>{
         let{name,email,password}=req.data;

    if(!name  || !email || !password)
   throw new ApiError(404,"All fields are required")   

    let user = await userModel.create({
        name,
        email,
        password,

    })

   return user;

}

module.exports=registerService