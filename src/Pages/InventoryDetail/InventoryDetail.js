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
            <div className='col-lg-12 col-md-12 col-12'>
                <div className='w-100 container  mx-auto'>
                    <div className='inventory-detail'>
                        <img src={location?.state?.img} alt="" />
                        <h2 className='inventory-name fst-italic fs-2'>Id: {id}</h2>
                        <h2 className='inventory-name fst-italic fs-4'>Name: {location?.state?.name}</h2>
                        <p className='text-danger'>Price: {location?.state?.price}</p>
                        <p>Description: {location?.state?.description}</p>
                        <p>Supplier: {location?.state?.supplier}</p>
                        <p>Sold: {location?.state?.sold}</p>
                        <h4>Quantity: {quantity}</h4>
                        <button className='btn-inventory btn btn-outline-light' onClick={() => setQuantity(location?.state?.quantity - 1)}>Delivered</button>
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