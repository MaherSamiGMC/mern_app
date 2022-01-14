import { ADD_NEW_PRODUCT_FAIL, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/productConstants"


export const getProductsReducer=(state={},action)=>{
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {loading:true}
        case GET_PRODUCTS_SUCCESS:
            return {loading:false,products:action.payload}
        case GET_PRODUCTS_REQUEST:
            return {loading:false}
        default:
            return state
    }
}

export const addNewProductReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_PRODUCT_REQUEST:
            return {loading:true}
        case ADD_NEW_PRODUCT_SUCCESS:
            return {loading:false,newProduct:action.payload}
        case ADD_NEW_PRODUCT_FAIL:
            return {loading:false}
        default:
            return state
    }
}

export const deleteProductReducer=(state={},action)=>{
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return {loading:true}
        case DELETE_PRODUCT_SUCCESS:
            return {loading:false,deletedProduct:action.payload}
        case DELETE_PRODUCT_FAIL:
            return {loading:false}
        default:
            return state
    }
}

