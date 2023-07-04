import React from 'react'
import { Badge, Button, Container, Dropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import { CartState } from '../../context/Context';
import Cart from '../Cart/Cart';
import { AiFillDelete } from 'react-icons/ai';


const Header = ({ product }) => {

    const { state: { cart }, dispatch } = CartState();

    const RemoveFromCartHandler = () => {
        dispatch(
            {
                type: "REMOVE_FROM_CART",
                payload: product
            }
        )
    }
  return (
    <div>
        <Navbar bg="dark" variant='dark' style={{ height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" >Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className={styles.search}>
                    <FormControl style={{width: 500}} placeholder='Search a product' className="m-auto"/>
                </Navbar.Text>
                <Navbar>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart color='white' fontSize="25px" />
                            <Badge background-color="transparent">{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 250}}>
                            {
                                cart.length > 0 ? (
                                    <>
                                        {
                                        cart.map(function(product){
                                            return(
                                                <>
                                                    <span className={styles.cartItem} key={product.id}>
                                                        <img src={product.image} className={styles.cartItemImg} alt={product.name} />
                                                    </span>
                                                    <div className="cartItemDetail">
                                                        <span>{product.name}</span>
                                                        <span>${product.price.split(".")[0]}</span>
                                                    </div>
                                                    <AiFillDelete fontSize="20px" style={{ cursor: "pointer"}} onClick={RemoveFromCartHandler}/>
                                                </>
                                            )
                                        })
                                    }
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px"}}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                    </>

                                ) : (
                                    <span style={{ padding: 10}}> Cart is Empty!</span>
                                )
                            }
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>

            </Container>
        </Navbar>
    </div>
  )
}

export default Header