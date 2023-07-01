import React, { useState } from 'react';
import styles from "./Filters.module.css";
import { Button, FormCheck } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const Filters = () => {

    const [rate, setRate] = useState(2);
  return (
    <div className={styles.filters}>
        <span className={styles.title}>Filter Products</span>
        <span>
            <FormCheck inline label="Ascending" name="group1" type="radio" id={`inline-1`}/>
        </span>
        <span>
            <FormCheck inline label="Descending" name="group1" type="radio" id={`inline-2`}/>
        </span>
        <span>
            <FormCheck inline label="Include Out of Stock" name="group1" type="checkbox" id={`inline-3`}/>
        </span>
        <span>
            <FormCheck inline label="Fast Delivery only" name="group1" type="radio" id={`inline-4`}/>
        </span>
        <span>
            <label style={{ paddingRight: 10}}>Rating:</label>
            <Rating rating={rate} onClick={(i) => setRate(i)} style={{ cursor: "pointer" }} />
        </span>
        <Button variant='light'>Clear Filters</Button>
    </div>
  )
}

export default Filters;