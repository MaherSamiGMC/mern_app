import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { getUserDetails } from '../Redux/Actions/userActions'
import {
    useParams
  } from "react-router-dom";
import { addNewProduct, deleteProduct } from '../Redux/Actions/productActions';
function Profile() {
    const [newProduct, setNewProduct] = useState({})
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch])
    const {userdetails} = useSelector(state => state.getUserDetails)
    return (
        <div>
            <Header/>
            <h1>Profile details</h1>
                <span>my email : {userdetails && <span>{userdetails.user.email}</span>} </span>
            <h1>My products</h1>
            {userdetails && userdetails.user.listOfProducts.map(el=><div><h1>{el.productName}</h1> <p>{el.Quantity}</p><button onClick={()=>dispatch(deleteProduct(el._id))}>delete</button></div>) }
            <h1>Add new product</h1>
            <div>product name</div>
                <input type='text' onChange={(e)=>setNewProduct({...newProduct,productName:e.target.value})} />
            <div>product quantity</div>
                <input type='number'onChange={(e)=>setNewProduct({...newProduct,Quantity:e.target.value})}  />
                <div>
                    <button onClick={()=>dispatch(addNewProduct({...newProduct,id}))}>add new product </button>
                </div>
        </div>
    )
}

export default Profile
