


const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = (req,res,next) =>{
    try{
        //extract jwt token
        //there are 3 ways to extract token - 1. cookie 2. body 3. from header
        const token = req.body.token;

        if(token){
            return res.status(401).json({
                success:false,
                message: "token missing",
            })
        }

        // verify the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode; //pay load store kar liya req.user me
        } catch(error){
            return res.status(401)({
                success:false,
                message:"token is invalid"
            });
        }


        next();
    } catch(error){ 
        return res.status(401).json({
            success:false,
            message:"something went wrong , while verifying the token",

        })
    }
}


exports.isUser = (req,res,next) => {
    try{
        if(req.user.role !== "AuthorisedUser"){
            return res.status(401).json({
                success:false,
                message:"this is protected route only for an authorised user"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'user role is not matching'
        })
    }
}













