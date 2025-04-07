const mongoose = require("mongoose") ;

const feedBackSchema = mongoose.Schema({
    fullname :{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

const feedbackModel = mongoose.model("feedback",feedBackSchema);

module.exports = feedbackModel ;