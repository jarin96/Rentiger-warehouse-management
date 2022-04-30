import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';
const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className='inventory-info'>
            <div id='inventory' className='container'>
                <div className="row">
                    <h1 className='title mt-5'>Inventory</h1>
                    <div className="inventories-container">
                        {
                            inventories.map(inventory => <Inventory
                                key={inventory.id}
                                inventory={inventory}
                            ></Inventory>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventories;