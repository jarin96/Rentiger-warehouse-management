import React from 'react';
import { useForm } from "react-hook-form";
import img from '../../../images/dress1.png'

const AddInventoryItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <div className='w-50 mx-auto'>
                <div className='container info-background my-5'>
                    <h2 className='text-center fs-2 fw-bold p-2'>Add Items</h2>
                    <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div>
                                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                    <input className='mb-2' placeholder='Email' {...register("email")} />
                                    <input className='mb-2' placeholder='Quantity' {...register("quantity")} />
                                    <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                                    <input className='mb-2' placeholder='Sold' {...register("sold")} />
                                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                                    <input type="submit" value='Add Item' />
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className=' mt-2'>
                                <img src={img}
                                    className="d-block w-100 " alt="">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItem;