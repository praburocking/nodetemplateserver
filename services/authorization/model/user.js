const mongoose = require('mongoose')
const settings=require('../../../settings')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)


let url=settings.MONGODB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then
(()=>{console.log("mangodb connected")}).catch((ex)=>{console.log("Exception =>",ex)})



const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    passwordHash:{type:String,required:true,minlength:8},
    isVerified:{type:Boolean,required:true}
  })


  userSchema.plugin(uniqueValidator)

  userSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
      returnedObject.id=returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }

  })


  module.exports=mongoose.model('User',userSchema)