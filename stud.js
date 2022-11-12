var express= require('express')

var mongoose= require('mongoose')

var bodyparser= require('body-parser') 

var {studModel}=require('./models/studentModel')
var {markModel}=require('./models/studMark')
var {studRouter}= require('./controllers/studentController')
const { markRouter } = require('./controllers/markController')


mongoose.connect("mongodb+srv://aiswarya:aishumongo123@cluster0.og0hdhj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})

var app= express()


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use('/student',studRouter)
app.use('/mark',markRouter)

app.listen(process.env.PORT||3001,()=>{

    console.log("Server started at 3000")
})
