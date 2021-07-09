require('dotenv').config();

//import
//======
const mongoose =require("mongoose");
const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const incomeRoutes = require("./routes/income");


//database connection
//===================
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex : true
})
.then(()=>{
    console.log("Database Connected");
})
.catch(
    ()=>{
    console.log("Error in connection");
    }
)

//middleware
//=========
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api",incomeRoutes);


//listen
//======
const port  = process.env.PORT ||   8000;
app.listen(port , ()=>{
    console.log(`app is running  at ${port}`)
})