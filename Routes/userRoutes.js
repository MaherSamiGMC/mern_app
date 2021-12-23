const express=require('express')
const { addNewUser, getUsers, getUser, updateUser, deleteUser, login } = require('../Controllers/userControllers')
const userMiddleware = require('../middlewares/userMiddleware')
const Router=express.Router()


Router.post('/newUser',addNewUser)

Router.post('/login',login)

Router.get('/',getUsers)

Router.get('/:id',getUser)

Router.put('/:id',userMiddleware,updateUser)

Router.delete('/:id',userMiddleware,deleteUser)





module.exports=Router