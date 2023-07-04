import React, { useEffect, useState } from 'react'
import { CartState } from '../../context/Context';
import styles from "./Cart.module.css";
import { ListGroup, Row, Col, Image, FormControl, Button } from 'react-bootstrap';
import Rating from '../Rating/Rating';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

    const { state: { cart }, dispatch } = CartState();

    const [ total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart])

    const RemoveFromCartHandler = () => {
        dispatch(
            {
                type: "REMOVE_FROM_CART",
                payload: product
            }
        )
    }
  return (
    <div className={styles.Cart}>
        <div className={styles.productContainer}>
            <ListGroup>
                {
                    cart.map(function(product){
                        return(
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={product.image} alt={product.name} fluid  rounded />
                                    </Col>
                                    <Col md={2}>
                                        <span> {product.name}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span> ${product.price}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Rating rating={product.rating}/>
                                    </Col>
                                    <Col md={2}>
                                        <FormControl as="select" value={product.qty}>
                                            {[...Array(product.inStock).keys()].map((x) => (
                                                <option key={x + 1} > {x + 1}</option>
                                            ))}
                                        </FormControl>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="Button" variant="light" onClick={RemoveFromCartHandler}>
                                            <AiFillDelete fontSize="20px"/>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
        <div className={`${styles.filters} ${styles.summary}`}>
            <span className={styles.title}>
                Subtotal({
                    cart.length
                }) items
            </span>
            <span style={{ fontWeight: 700, fontSize: 20}}> Total: ${ total }</span>
        </div>
    </div>
  )
}

export default Cart;