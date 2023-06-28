import React from 'react'
import { Badge, Container, Dropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
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
                            <Badge background-color="transparent">{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 250}}>
                            <span style={{ padding: 10}}> Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>

            </Container>
        </Navbar>
    </div>
  )
}

export default Header