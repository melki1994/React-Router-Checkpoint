import React from 'react'
import { Rate } from 'antd';

const Rating = ({ratingSearch, rate ,rating , setRating }) => {

    const handleChange = value => (
        setRating(value)
    );

    return ( 
        
        ratingSearch ?
            <Rate onChange={handleChange} value={rating} /> 
        
        :
        
        <Rate disabled value={rate} style={{fontSize:'smaller'}} /> 
            
    );
}

export default Rating
