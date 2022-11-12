var express= require('express')

var mongoose= require('mongoose')

var bodyparser= require('body-parser') 

var {studModel}=require('../models/studentModel')

var studRouter=express.Router()

studRouter.use(bodyparser.urlencoded({extended:false}))
studRouter.use(bodyparser.json())

studRouter.get('/',(req,res)=>{

    res.send("Welcome to Students Page")
})

studRouter.post('/read',(req,res)=>{
    var studObject= new studModel(req.body)
  
  
    studObject.save(
        (error)=>{
            if(error)
            {
                res.send(error)
            }
            else{
                res.json({"status":"success"})
            }
        }

    )
    
})
studRouter.get('/viewall',async(req,res)=>{
    try{

        var result= await studModel.find()
        res.json(result)
    
    }
    catch(error)
    {
        res.send(error)
    }

})

studRouter.post('/search',async(req,res)=>{

    try
    {
        var result= await studModel.find(req.body)
        res.json(result)
    }
    catch(error)
    {
        res.send(error)
    }

})

studRouter.post('/edit',async(req,res)=>{
try{
    var result=await studModel.findByIdAndUpdate({"_id":req.body._id},req.body)
    res.json(result)
}
catch(error)
{
    res.send(error)
}

})

studRouter.post('/delete',async(req,res)=>{
    try{
        var result= await studModel.findOneAndDelete({"_id":req.body._id})
        res.json(result)
    }
   catch(error)
   {
    res.send(error)
   }

})

module.exports={studRouter}




