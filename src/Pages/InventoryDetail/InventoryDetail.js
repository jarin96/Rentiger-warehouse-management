import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();

    const location = useLocation();
    const [quantity, setQuantity] = useState(location?.state?.quantity);
    console.log(location);
    return (
        <div className='row'>
            <div className='container mx-auto w-50'>
                <div className='col-lg-9 col-md-6 col-12'>
                    <div className='inventory-detail'>
                        <img className='img-fluid' src={location?.state?.img} alt="" />
                        <h2 className='inventory-name fst-italic fs-2'>Id: {id}</h2>
                        <h2 className='inventory-name fst-italic fs-4'>Name: {location?.state?.name}</h2>
                        <p className='text-danger'>Price: {location?.state?.price}</p>
                        <p>Description: {location?.state?.description}</p>
                        <p>Supplier: {location?.state?.supplier}</p>
                        <p>Sold: {location?.state?.sold}</p>
                        <h4>Quantity: {quantity}</h4>
                        <button className='btn-inventory btn btn-outline-light' onClick={() => setQuantity(quantity - 1)}>Delivered</button>
                    </div>
                    <div className='col-lg-1 col-md-6 col-12'>
                        <div>
                            <div>
                                <h5 className='inventory-name fst-italic fs-4'>Restock the items</h5>
                                <input type="number" name="number" id="" />
                                <button className='text-center mt-2 btn-inventory btn btn-outline-light' onClick={() => setQuantity(quantity + 1)}>Restock</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <Link to='/manageinventory'>
                            <button className='btn btn-dark btn btn-outline-primary'>Manage Inventories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;