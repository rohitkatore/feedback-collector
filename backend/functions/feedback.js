// backend/functions/feedback.js
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const feedbackModel = require('../models/feedback.model');

// Setup express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
  .catch(err => console.log("MongoDB connection error:", err));

// Setup routes
app.post("/submit-feedback", [
  body("fullname").notEmpty().withMessage("Fullname is required."),
  body("email").isEmail().withMessage("Email is required."),
  body("message").notEmpty().withMessage("Feedback is required.")
], async (req, res) => {
  // Your existing controller logic
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

});

app.get("/feedbacks", async (req, res) => {
  // Your existing controller logic
  try{
    const feedbacks = await feedbackModel.find({}) ;
    res.status(201).json(feedbacks) ;
}catch(err){
    console.log(err) ;
    res.status(501).json({meessage:"Internal server error."});
}
  
});

// Export the serverless function
exports.handler = serverless(app);