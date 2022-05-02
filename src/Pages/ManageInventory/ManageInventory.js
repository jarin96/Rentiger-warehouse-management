import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageInventories from '../Home/ManageInventories/ManageInventories';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ManageInventory.css';

const ManageInventory = () => {
    const [inventory, setInventory] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(inventory => inventory._id !== id);
                    setInventory(remaining);
                })
        }
    }
    return (
        <div className='container'>
            <div className='manageinventory-container'>
                {
                    inventory.map(inventories => <div className='inventory-item mx-auto'>
                        <div>
                            <img src={inventories.img} alt="" />
                        </div>
                        <div className="manage-details">
                            <div className="manage-item-details">
                                <p>{inventories.name}</p>
                                <p className='text-danger'>Price: ${inventories.price}</p>
                                <p><small>Description: {inventories.description}</small></p>
                                <p>Supplier: {inventories.supplier}</p>
                                <p>Quantity: {inventories.quantity}</p>
                                <p>Sold: {inventories.sold}</p>
                            </div>
                            <div className="manage-item-delete me-4">
                                <button onClick={() => handleDelete(inventories._id)} className='btn btn-light rounded-3 btn btn-outline-danger'>Delete <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <div className='text-center mt-4'>
                    <Link to='/additem'>
                        <button className='btn btn-dark btn btn-outline-primary fixed-bottom w-25 mx-auto'>Add New Item</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;