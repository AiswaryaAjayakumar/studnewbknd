var mongoose= require('mongoose')


var studSchema= new mongoose.Schema(

    {
        name:{
            type:String,
            required:true
        },
       roll:{
        type:Number,
        required:true
       },
       admno:{
        type:Number,
        required:true
       },
       clg:{
        type:String,
        required:true
       }
    }
)

var studModel= mongoose.model('students',studSchema)


module.exports={studModel}