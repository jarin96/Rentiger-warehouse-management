import React from 'react';
import './ManageInventories.css';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ManageInventories = ({ inventories }) => {
    const { _id, name, price, img, description, supplier, quantity, sold } = inventories;
    console.log(inventories);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to Delete?');
        if (proceed) {
            const url = `https://protected-dusk-73186.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
    }

    return (
        <div className='inventory-item mx-auto'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="manage-details">
                <div className="manage-item-details">
                    <p>{name}</p>
                    <p className='text-danger'>Price: ${price}</p>
                    <p><small>Description: {description}</small></p>
                    <p>Supplier: {supplier}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Sold: {sold}</p>
                </div>
                <div className="manage-item-delete me-4">
                    <button onClick={() => handleDelete(_id)} className='btn btn-light rounded-3 btn btn-outline-danger'>Delete <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;