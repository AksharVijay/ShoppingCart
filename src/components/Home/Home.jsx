import React from 'react'
import { CartState } from '../../context/Context';
import styles from "./Home.module.css";
import Filters from '../Filters/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';


const Home = () => {

    const {state:{products}} = CartState();

    console.log(products);
  return (
    <div className={styles.home}>
        <Filters/>
        <div className={styles.productContainer}>
            {
                products.map(function(product){
                    return(
                        <>
                            <SingleProduct product={product} key={product.id}/>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home;