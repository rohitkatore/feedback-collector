const express = require("express") ;
const router = express.Router() ;
const {body} = require("express-validator") ;
const { acceptFeedback, getFeedbacks } = require("../controllers/feedback.controller");

router.post("/submit-feedback",[
        body("fullname").notEmpty().withMessage("Fullname is required."),
        body("email").isEmail().withMessage("Email is required."),
        body("message").notEmpty().withMessage("Feedback is required.")
],acceptFeedback); 

router.get("/feedbacks",getFeedbacks);

module.exports = router ;