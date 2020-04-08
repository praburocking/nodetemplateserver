const mongoose = require('mongoose')
const settings=require('../../../settings')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)



mongoose.connect(settings.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true }).then
    (()=>{console.log("mangodb connected")}).catch((ex)=>{console.log("Exception =>",ex); process.exit(1)})

const authSchema=new mongoose.Schema({
    key:{type:String,required:true},
   payload:{type:String,required:true},
  })

  authSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
      returnedObject.id=returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  module.exports=mongoose.model('Auth',authSchema)