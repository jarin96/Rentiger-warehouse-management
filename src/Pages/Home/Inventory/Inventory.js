import React from 'react';
import './Inventory.css';
const Inventory = ({ inventory }) => {
    const { name, img, price, description, quantity, supplier } = inventory;
    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <h2 className='inventory-name fst-italic fs-4'>{name}</h2>
            <p className='inventory-price'>Price: ${price}</p>
            <p>{description}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <button className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Inventory;