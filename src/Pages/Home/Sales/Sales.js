import React from 'react';
import './Sales.css';

import dress1 from '../../../images/dress1.png';
import dress2 from '../../../images/dress2.png';
import dress3 from '../../../images/dress3.png';
import dress4 from '../../../images/dress4.png';
import Sale from '../Sale/Sale';

const sales = [
    { id: 1, name: 'Long Sleeve Knit Jumper', price: 33, img: dress1 },
    { id: 2, name: 'Pique Sweetheart Neck Top', price: 15, img: dress2 },
    { id: 3, name: 'Striped Pique Pocket Vest', price: 17, img: dress3 },
    { id: 4, name: 'Denim Turn Up Hem Mom Short', price: 21, img: dress4 },
]

const Sales = () => {
    return (
        <div className='container'>
            {/* <h2 className='text-center'>New arrivals</h2> */}
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
    );
};

export default Sales;