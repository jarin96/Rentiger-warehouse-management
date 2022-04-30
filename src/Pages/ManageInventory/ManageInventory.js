import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageInventories from '../Home/ManageInventories/ManageInventories';

const ManageInventory = () => {
    const [inventory, setInventory] = useProducts();
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
        </div>
    );
};

export default ManageInventory;