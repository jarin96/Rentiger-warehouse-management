import React from 'react';
import Notfound from '../../../images/NotFound/Notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Page not Found</h2>
            <img className='w-100' src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;