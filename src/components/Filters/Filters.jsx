import styles from "./Filters.module.css";
import { Button, FormCheck } from 'react-bootstrap';
import Rating from '../Rating/Rating';
import { CartState } from '../../context/Context';

const Filters = () => {

    const{productState:{
        byStock,
        byFastDelivery,
        byRating,
        sort
    }, productDispatch} = CartState();

    const productAscendingHandler = () => {
        productDispatch({
            type:"SORT_BY_PRICE",
            payload:"lowToHigh"
        })
    }

    const productDescendingHandler = () => {
        productDispatch({
            type:"SORT_BY_PRICE",
            payload:"HighToLow"
        })
    }

    const filterStockHandler = () => {
        productDispatch({
            type:"FILTER_BY_STOCK"
        })
    }

    const fastDeliveryHandler = () => {
        productDispatch({
            type:"FILTER_BY_DELIVERY"
        })
    }

    const clearFilterHandler = () => {
        productDispatch({
            type:"CLEAR_FILTERS"
        })
    }
  return (
    <div className={styles.filters}>
        <span className={styles.title}>Filter Products</span>
        <span>
            <FormCheck inline label="Ascending" name="group1" type="radio" id={`inline-1`} onChange={productAscendingHandler} checked={sort === "lowToHigh" ? true : false } />
        </span>
        <span>
            <FormCheck inline label="Descending" name="group1" type="radio" id={`inline-2`} onChange={productDescendingHandler} checked={sort === "HighToLow" ? true : false }/>
        </span>
        <span>
            <FormCheck inline label="Include Out of Stock" name="group1" type="checkbox" id={`inline-3`} onChange={filterStockHandler} checked={byStock}/>
        </span>
        <span>
            <FormCheck inline label="Fast Delivery only" name="group1" type="radio" id={`inline-4`} onChange={fastDeliveryHandler} checked={byFastDelivery}/>
        </span>
        <span>
            <label style={{ paddingRight: 10}}>Rating:</label>
            <Rating rating={byRating} onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1}) } style={{ cursor: "pointer" }} />
        </span>
        <Button variant='light' onClick={clearFilterHandler}>Clear Filters</Button>
    </div>
  )
}

export default Filters;