import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageInventories from '../Home/ManageInventories/ManageInventories';
import './ManageInventory.css';

const ManageInventory = () => {
    const [inventory] = useProducts();
    return (
        <div className='container'>
            <div className='manageinventory-container'>
                {
                    inventory.map(inventories => <ManageInventories
                        key={inventories.id}
                        inventories={inventories}
                    ></ManageInventories>)
                }
            </div>
            <div>
                <div className='text-center mt-4'>
                    <Link to='/addinventory'>
                        <button className='btn btn-dark btn btn-outline-primary fixed-bottom w-25 mx-auto'>Add New Item</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;