import React from 'react';
import './Sales.css';

import dress1 from '../../../images/dress1.png';
import dress2 from '../../../images/dress2.png';
import dress3 from '../../../images/dress3.png';
import dress4 from '../../../images/dress4.png';
import Sale from '../Sale/Sale';
import { Link } from 'react-router-dom';

const sales = [
    { id: 1, name: 'Long Sleeve Knit Jumper', price: 33, img: dress1 },
    { id: 2, name: 'Pique Sweetheart Neck Top', price: 15, img: dress2 },
    { id: 3, name: 'Striped Pique Pocket Vest', price: 17, img: dress3 },
    { id: 4, name: 'Denim Turn Up Hem Mom Short', price: 21, img: dress4 },
]

const Sales = () => {
    return (
        <div className='sales-info'>
            <div className='text-center mt-4'>
                <Link to='/manageinventory'>
                    <button className='btn btn-dark btn btn-outline-primary'>Manage Inventories</button>
                </Link>
            </div>
            <div id='sale' className='container'>
                <h3 className='text-center mt-5'>FLASH SALE</h3>
                <h4 className='text-center mt-2'>UP TO 50% OFF*</h4>
                <div className="sales-container">
                    {
                        sales.map(sale => <Sale
                            key={sale.id}
                            sale={sale}
                        ></Sale>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sales;