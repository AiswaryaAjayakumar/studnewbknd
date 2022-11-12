var mongoose= require('mongoose')


var markSchema= new mongoose.Schema(

    {
        studentId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'students'
        },
        exam_name:{
            type:String,
            required:true
        },
        sub_name1:{
            type:String,
        },
        sub1_markobtained:{
            type:Number
        },
        sub1_totalmark:{
            type:Number
        },
        sub_name2:{
            type:String,
        },
        sub2_markobtained:{
            type:Number
        },
        sub2_totalmark:{
            type:Number
        },
        sub_name3:{
            type:String,
         },
         sub3_markobtained:{
            type:Number
        },
        sub3_totalmark:{
            type:Number
        },
        sub_name4:{
            type:String,
        },
        sub4_markobtained:{
            type:Number
        },
        sub4_totalmark:{
            type:Number
        },
        sub_name5:{
            type:String,
        },
        sub5_markobtained:{
            type:Number
        },
        sub5_totalmark:{
            type:Number
        }

    }
)

var markModel= mongoose.model('marks',markSchema)


module.exports={markModel}