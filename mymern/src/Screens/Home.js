import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Header from '../components/Header'
import { getProducts } from '../Redux/Actions/productActions'
function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const {loading,products} = useSelector(state => state.getProducts)
    return (
        <>
           <Header/> 
           {loading && "loading"}
           {products && products.allProducts.map(el=><div><h1>{el.productName}</h1> <p>{el.Quantity}</p></div>)}
        </>
    )
}

export default Home
