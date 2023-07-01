import React from 'react'
import styles from "./SingleProduct.module.css";
import { Card, Button } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const SingleProduct = ({product}) => {
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
        <Button variant='danger'> Remove from Cart</Button>
        <Button disabled={product.inStock}>
            {!product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct;