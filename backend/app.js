const dotenv = require("dotenv") ;
dotenv.config() ;
const express = require("express") ;
const cors = require("cors") ;
const connectDB = require("./db/db");
const feedbackRouter = require("./routes/feedback.route");
const app = express() ;
connectDB();

app.use(cors());
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use(feedbackRouter) ;

module.exports = app ;