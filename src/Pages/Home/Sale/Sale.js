import React from 'react';
import './Sale.css';
const Sale = ({ sale }) => {
    const { name, img, price } = sale;
    return (
        <div>
            <div className='sale'>
                <img src={img} alt="" />
                <p className='fst-italic fs-6'>{name}</p>
                <p className='sale-price'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Sale;