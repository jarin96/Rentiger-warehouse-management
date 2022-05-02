import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const location = useLocation();
    const [quantity, setQuantity] = useState(location?.state?.quantity);
    console.log(location);
    const submitForm = event => {
        event.preventDefault();
        const number = event.target.number.value;
        setQuantity(parseInt(number) + parseInt(quantity));
    }
    return (
        <div>
            <div className=' mx-auto '>
                <div className='container row mx-auto'>
                    <div className='inventory-detail col-lg-8 col-md-12 col-sm-12 p-5'>
                        <img className='img-fluid' src={inventory.img} alt="" />
                        <p className='inventory-name fst-italic fs-5'>Id: {id}</p>
                        <h2 className='inventory-name fst-italic fs-4'>Name: {inventory.name}</h2>
                        <p className='text-danger'>Price: {inventory.price}</p>
                        <p>Description: {inventory.description}</p>
                        <p>Supplier: {inventory.supplier}</p>
                        <p>Sold: {inventory.sold}</p>
                        <h4>Quantity: {inventory.quantity}</h4>
                        <button className='btn-inventory btn btn-outline-light' onClick={() => setQuantity(quantity - 1)}>Delivered</button>
                    </div>
                    <div className='mx-auto row text-center'>
                        <div className='col-lg-8 col-md-12 col-sm-12 p-5'>
                            <form onSubmit={submitForm}>
                                <div className='mt-3'>
                                    <h5 className='inventory-name fst-italic fs-4'>Restock the items</h5>
                                    <input type="number" name="number" id="" />
                                    <button className='text-center btn-inventory btn btn-outline-light' onClick={() => setQuantity(quantity)}>Restock</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='mx-auto row text-center'>
                        <div className='col-lg-8 col-md-12 col-sm-12 p-5'>
                            <Link to='/manageinventory'>
                                <button className='btn btn-dark btn btn-outline-primary'>Manage Inventories</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;