const Income = require("../models/income");


exports.getTransactionId = (req,res,next,id)=>{
    Income.findById(id)
    .exec((err,transaction)=>{
        if(err || !transaction){
            return res.send(400).json({
                error:"Cannot delete data"
            })
        }
        res.profile = transaction
        next()
    })
}

exports.addTransaction = (req,res)=>{
    const income = new Income(req.body)
    income.save(
        (err,income) =>{
            if(err){
                return res.send(400).json({
                    error:"not able to insert(backend)"
                })
            }
          res.json({income})
        }
    )
}

exports.getAllTransaction = (req,res)=>{
    Income.find().exec((err,items)=>{
        if(err){
            return res.send(400).json({
                error:"Cannot find items"
            })
        }
        // console.log(items)
        res.json(items);
    })
}

exports.removeTransaction = (req,res)=>{
    let trans = req.body
    // console.log(trans);
    Income.deleteOne((err,item)=>{
        if(err){
            return res.status(400).json({
                error:"Failed  to delete the product"
            })
        }
        else{
            res.json({
                message:"Deletion was successfull"
            })
        }
    })
}