import React from 'react'
import styles from "./SingleProduct.module.css";
import { Card, Button } from 'react-bootstrap';
import Rating from '../Rating/Rating';
import { CartState } from '../../context/Context';

const SingleProduct = ({product}) => {

    const {state: {cart}, dispatch} = CartState()

    const AddToCartHandler = () => {
        dispatch(
            {
                type: "ADD_TO_CART",
                payload: product
            }
        )
    }
    const RemoveFromCartHandler = () => {
        dispatch(
            {
                type: "REMOVE_FROM_CART",
                payload: product
            }
        )
    }
  return (
    <div className={styles.products}>
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.name}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle style={{paddingBottom: 10}}>
            <span> $ {product.price.split(".")[0]}</span>
            {
                product.fastDelivery ? (
                    <div> Fast Delivery</div>
                ) : (
                    <div> 4 Days Delivery</div>
                )
            }
            <Rating rating={product.ratings}/>
        </Card.Subtitle>
        { cart.some((p) => p.id === product.id) ? (
            <Button variant='danger'onClick={RemoveFromCartHandler}> Remove from Cart</Button>
        ):(
            <Button onClick={AddToCartHandler}disabled={product.inStock}>
            {!product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
        )}
        

      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct;