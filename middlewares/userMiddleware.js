var jwt = require('jsonwebtoken');
const users=require('../models/userSchema')

const userMiddleware=async(req,res,next)=>{
    try {
        // req.headers['auth'] === req.headers.auth
        const token=req.headers['auth']
        if(!token){
            return res.json({message:'not authorized'})
        } else {
            var decoded =jwt.verify(token, process.env.privateKey)
            const user=await users.findById(decoded.id)
            if (!user){
                return res.json({message:'not authorized'})
            }
            next()
        }
        
    } catch (error) {
        return res.json({message:error})
    }
}

module.exports=userMiddleware