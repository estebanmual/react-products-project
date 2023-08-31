import { useState, useEffect } from 'react'
import eventsData from '../data/products.json'

const purchaseProduct = ( productsArray, purchaseProductSKU ) => {
    const newProductsArray = [...productsArray]
    return newProductsArray.map((product) => {
        if (product.sku === purchaseProductSKU) {
            product.quantity --
            console.log(product)
        }
        return product
    })
}

const useProductsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setData(eventsData.productos)
            setIsLoading(false)
        }, 4000)
    }, [])

    const updateProductQuantity = (productSKU) => {
        setData(purchaseProduct(data, productSKU))
    } 

    return {
        products: data,
        isLoading,
        updateProductQuantity,
    };
};

export default useProductsData;