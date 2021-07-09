const mongoose = require("mongoose");
const {objectId} = mongoose.Schema;

const incomeSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        maxLength : 32,
        trim : true
    },
    amount : {
        type : Number ,
        require : true,
    },
    category :{
        type : String,
        required : true,
        maxLength : 32,
        trim : true
    }
} ,
{timestamps : true }

)

module.exports = mongoose.model("Income",incomeSchema);
