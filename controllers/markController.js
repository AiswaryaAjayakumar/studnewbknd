var express= require('express')

var mongoose= require('mongoose')

var bodyparser= require('body-parser') 

const { markModel } = require('../models/studMark')
const { studModel } = require('../models/studentModel')

var markRouter= express.Router()

markRouter.use(bodyparser.urlencoded({extended:false}))
markRouter.use(bodyparser.json())


markRouter.get('/',(req,res)=>{
    res.send("Welcome to mark page")
})

markRouter.post('/read',(req,res)=>{
    var markObject= new markModel(req.body)
    
    markObject.save(
        (error)=>{
         if(error){
            res.send(error)
         }
         else{
            res.json({"status":"success"})
         }
        }
    )
    
})

markRouter.get('/viewall',async(req,res)=>{
    try{
        studModel.aggregate(
            [
                {
                   $lookup:{
                    from:"marks",
                    localField:"_id",
                    foreignField:"studentId",
                    as:"studentsmarks"
                   } 
                }
            ],
            (error,data)=>{
                return res.json(data)
            }
        )
    }
    catch(error)
    {
        res.send(error)
    }

   

})
module.exports={markRouter}
