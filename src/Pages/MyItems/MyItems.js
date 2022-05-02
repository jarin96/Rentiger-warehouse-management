import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    console.log(email);
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/item/${email}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    const handleDelete = id => {
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
        <div className='w-50 mx-auto'>
            <h2>This is my item page</h2>
            {
                inventory.map(inventory => <div
                    key={inventory._id}
                >
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h5>
                    <h5>Email: {inventory.email}</h5>
                </div>)
            }
        </div>
    );
};

export default MyItems;