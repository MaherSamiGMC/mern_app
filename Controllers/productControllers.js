const products=require('../models/productSchema')
const users=require('../models/userSchema')
const addNewProduct=async(req,res)=>{
    try {

        const newProduct=new products(req.body)
        await newProduct.save()
        await users.findByIdAndUpdate(req.body.id,{$push:{listOfProducts:newProduct}})
        return res.json({message:"product added successfully",newProduct})
    } catch (error) {
        return res.json({message:error})
    }
}

const getProducts=async(req,res)=>{
    try {
        const allProducts=await products.find()
        return res.json({message:"all products showed successfully",allProducts})
    } catch (error) {
        return res.json({message:error})
    }
}

const getProduct=async(req,res)=>{
    try {
        const product=await products.findById(req.params.id)
        return res.json({message:"product showed successfully",product})

    } catch (error) {
        return res.json({message:error})
    }
}

const updateProduct=async(req,res)=>{
    try {
                // two methods to show updated product
        const newProduct=await products.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        const newProduct_v2=await products.findById(req.params.id)
        // newProduct=newProduct_v2
        return res.json({message:"product updated successfully",newProduct})

    } catch (error) {
        return res.json({message:error})
    }
}

const deleteProduct=async(req,res)=>{
    try {
        const product=await products.findByIdAndDelete(req.params.id)
        return res.json({message:"product deleted successfully",product})

    } catch (error) {
        return res.json({message:error})
    }
}

module.exports={addNewProduct,getProducts,getProduct,updateProduct,deleteProduct}