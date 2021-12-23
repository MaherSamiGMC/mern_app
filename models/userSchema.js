const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema=new Schema({
    email:String,
    password:String,
    listOfProducts:[{type:Schema.Types.ObjectId,ref:'products'}]
})

module.exports=mongoose.model('users',userSchema)