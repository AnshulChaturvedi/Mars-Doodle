//jwt token banane k liye - header ,body , signature(or secret)

const User = require("../models/user")
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config()

//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {nickname,email,password} = req.body;
        

        //check if user already exist
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            })
        }

        //secure pswd
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,saltRounds);
        }
        catch(e){
            return res.status(500).json({
                success:false,
                message:"Internal server error signup nhk",
            })
        }

        //create entry for the user
        const user = await User.create({
            nickname,email,password:hashedPassword,role:AuthorisedUser
        })

        return res.status(200).json({
            success:true,
            message:"user created successfully",
        })
    }
    catch(error){
        console.error('Error in signup route:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message, // Include the error message for debugging
        });
    }
}

exports.login = async (req,res) =>{
    try{
        //data fetch
        const {email,password,nickname} = req.body;
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"enter the valid details"
            })      
        }

        const user = await User.findOne({email});
            
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not registered"
            })
        }


        const payload = {
            email:user.email,
            id:user._id,
            nickname:user.nickname,
            role:user.role,
        }
        //verify the pswd
        if(await bcrypt.compare(password,user.password)){
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiredIn:"2h",
                });
            
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            
            //cookie ke andar 3 parameters - naam , cookie ka data , kuch options
            const options = {
                exipires: new Date( Date.now() + 3*24*60*60*1000),//3 din ke liye itne mili seconds
                httpOnly:true, //will not be able to access on the client side
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully",
            })
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Incorrect Password"
            })
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Login failed",
        })
    }
}