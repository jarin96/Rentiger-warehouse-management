import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    console.log(email);
    const navigate = useNavigate();
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch(`https://protected-dusk-73186.herokuapp.com/item/${email}`)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    const auths = localStorage.getItem('token')
    if (auths) {

    }
    else {
        navigate('/home');
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to Delete?');
        if (proceed) {
            const url = `https://protected-dusk-73186.herokuapp.com/inventory/${id}`;
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
            <h2 className='text-center text-primary'>My Items</h2>
            <div className='my-item-container'>
                {
                    inventory.map(inventory => <div
                        key={inventory._id}
                    >
                        <img height='100px' src={inventory.img} alt="" />
                        <p>{inventory.name} <button className='btn btn-primary' onClick={() => handleDelete(inventory._id)}>Delete<FontAwesomeIcon className='mx-1' icon={faTrash}></FontAwesomeIcon></button></p>
                        <p>Description: {inventory.description}</p>
                        <p>Price: ${inventory.price}</p>
                        <p>Quantity: {inventory.quantity}</p>
                        <p>Email: {inventory.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;