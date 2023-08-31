import { useCallback, useMemo } from 'react';
import styles from './Product.module.css'

const Product = (props) => {
    const { product, updateProductQuantity } = useMemo(() => props, [props]);
    
    const purchaseOnClickHandler = useCallback(() => {
        updateProductQuantity(product.sku);
    }, [product.sku, updateProductQuantity])

    return (
        <div className={styles.container}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            {
                product.quantity === 0 ? (
                    <p>Producto agotado</p>
                ) : (
                    <button onClick={() => purchaseOnClickHandler()}>
                        Comprar
                    </button>
                )
            }
        </div>
    )
}

export default Product