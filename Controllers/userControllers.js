
const users=require('../models/userSchema')
const products=require('../models/productSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

const addNewUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await users.findOne({email})
        if (user){
            return res.status(400).json({message:'user already exists'})
        } else {
            const hashed=await bcrypt.hash(password,saltRounds)
            const newUser=new users({...req.body,password:hashed})
            await newUser.save()
            return res.json({message:'user added successfully'})
        }
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

const getUsers=async(req,res)=>{
    try {
        const allUsers=await users.find().populate("listOfProducts")
        return res.json({message:'users found successfully',allUsers})
    } catch (error) {
        return res.json({message:error})

    }
}

const getUser=async(req,res)=>{
    try {
        const user=await users.findById(req.params.id)
        return res.json({message:'user found successfully',user})
    } catch (error) {
        return res.json({message:error})

    }
}

const deleteUser=async(req,res)=>{
    try {
        await users.findByIdAndDelete(req.params.id)
        return res.json({message:'user deleted successfully'})
    } catch (error) {
        return res.json({message:error})

    }
}

const updateUser=async(req,res)=>{
    try {
        const updatedUser=await users.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        return res.json({message:'user updated successfully',updatedUser})
    } catch (error) {
        return res.json({message:error})

    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await users.findOne({email})
        if (!user){
            return res.json({message:'bad credentials'})
        }else {
            const match=await bcrypt.compare(password, user.password)
            if (!match){
                return res.json({message:'bad credentials'}) 
            } else {
                var token = jwt.sign({ id: user._id }, process.env.privateKey);
                return res.json({message:'user loggedIn successfully',userId:user._id,token})

            }
        }
    } catch (error) {
        return res.json({message:error})
    }
}

module.exports={addNewUser,getUsers,updateUser,deleteUser,getUser,login}