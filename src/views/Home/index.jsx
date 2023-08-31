// hooks
import useProductsData from "../../hooks/useProductsData";

// components and styles
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import styles from  "./Home.module.css";

const Home = () => {
  const { products, isLoading, updateProductQuantity } = useProductsData();

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.productsWrapper}>
      { products.map((product) => <Product key={`product-key-${product.sku}`} product={product} updateProductQuantity={updateProductQuantity}/>)}
    </div>
  )
}

export default Home;