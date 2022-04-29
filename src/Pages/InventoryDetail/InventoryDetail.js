import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const { id } = useParams();

    const location = useLocation();
    const [quantity, setQuantity] = useState(location?.state?.quantity);
    console.log(location);
    return (
        <div>
            <h2>Welcome to detail: {id}</h2>
            <h2>Name{location?.state?.name}</h2>
            <h2>Quantity{quantity}</h2>
            <button onClick={() => setQuantity(location?.state?.quantity - 1)}>Delivered</button>
        </div>
    );
};

export default InventoryDetail;