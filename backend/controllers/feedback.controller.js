const { validationResult } = require("express-validator");
const feedbackModel = require("../models/feedback.model");

const acceptFeedback = async (req,res)=>{
    const error = validationResult(req) ;
    if(!error.isEmpty()){
        return res.status(400).json({message : error.array()}) ;
    }
    const {fullname,email,message} = req.body ;
    if(!fullname || !email || !message){
        return res.status(400).json({message:"All fields are required"}) ;
    }
    try{
        const feedback = await feedbackModel.create({
            fullname,
            email,
            message
        });
        if(!feedback){
            return res.status(501).json({meessage:req.error}) ;
        }
        return res.status(201).json({message:"feedback Send."});
    }catch(err){
        console.log(err) ;
        return res.status(501).json({message:"Internal server error."});
    }
}

const getFeedbacks = async(req,res) =>{
    try{
        const feedbacks = await feedbackModel.find({}) ;
        res.status(201).json(feedbacks) ;
    }catch(err){
        console.log(err) ;
        res.status(501).json({meessage:"Internal server error."});
    }
}

module.exports = {acceptFeedback,getFeedbacks} ;