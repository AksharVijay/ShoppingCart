import React from 'react'
import { CartState } from '../../context/Context';
import styles from "./Home.module.css";
import Filters from '../Filters/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';


const Home = () => {

    const {state:{products}, productState:{
        sort,
        byStock,
        byFastDelivery,
        byRating,
        searchQuery
    }} = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort((a, b) =>
             sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((product) => product.inStock)
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts((product) => product.fastDelivery)
        }

        if(byRating){
            sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating)
        }

        if(searchQuery){
            sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts;


    }

  return (
    <div className={styles.home}>
        <Filters/>
        <div className={styles.productContainer}>
            {
                transformProducts().map(function(product){
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