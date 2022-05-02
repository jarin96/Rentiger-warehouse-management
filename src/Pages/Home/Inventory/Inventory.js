import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';
const Inventory = ({ inventory }) => {
    const { _id, name, img, price, description, quantity, supplier } = inventory;
    const navigate = useNavigate();
    const navigateInventory = info => {
        // navigate(`/inventory/${id}`);
        navigate(`/inventory/${info._id}`, { state: info });
        console.log(_id);
    }
    return (
        <div>
            <div className='inventory'>
                <img src={img} alt="" />
                <h2 className='inventory-name fst-italic fs-4'>{name}</h2>
                <p className='inventory-price'>Price: ${price}</p>
                <p>{description}</p>
                <p>Supplier: {supplier}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => navigateInventory(inventory)} className='btn-inventory btn btn-outline-light'>Update</button>
            </div>
        </div>

    );
};

export default Inventory;