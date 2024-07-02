import productsApi from "api/productApi"
import { useEffect, useState } from "react"

export default function useProductDetail(productId) {
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        (async () =>{
            try {
                setLoading(true)
                const result = await productsApi.get(productId)
                // console.log('result',result);
                setProduct(result)
            } catch (error) {
                console.log("failed to load product",error);
            }
            setLoading(false)
        })()
    },[productId])


    return {product , loading}
}