import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
const Rating = ({ rating, onClick, style}) => {
  return (
    <div>
        {
            [...Array(5)].map(function(_, i){
                return(
                    <span key={i} onClick={() => onClick} style={style}>
                        { rating > i ? ( <AiFillStar fontSize="25px" />) : (<AiOutlineStar fontSize="25px" />)}
                    </span>
                )
            })
        }
    </div>
  )
}

export default Rating;