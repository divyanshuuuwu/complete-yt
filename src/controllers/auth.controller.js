const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")


async function registerUser(req,res){
    const{username, email, password} = req.body 
    
    const isUserExists = await userModel.findOne({email})
    
    if(isUserExists){
        return res.status(409).json({
            message:"email already exists"
        })
    }
    
    
    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("hero", token)

    res.status(201).json({
        message: "user registered sucessfully",
        user,
        
    })

}

module.exports = {registerUser}