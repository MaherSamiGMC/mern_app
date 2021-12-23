const express=require('express')
const { addNewProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../Controllers/productControllers')
const userMiddleware = require('../middlewares/userMiddleware')
const Router=express.Router()

Router.post('/newProduct',userMiddleware,addNewProduct)

Router.get('/',getProducts)

Router.get('/:id',getProduct)

Router.put('/:id',userMiddleware,updateProduct)

Router.delete('/:id',userMiddleware,deleteProduct)


module.exports=Router