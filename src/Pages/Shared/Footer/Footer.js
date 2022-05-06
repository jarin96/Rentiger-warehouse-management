import React from 'react';

const Footer = () => {
    return (
        <footer className='py-5 bg-dark footer text-center'>
            <div className='container-fluid'>
                <p className='mt-5 text-center text-white'><small>copyright &copy; {new Date().getFullYear()}</small></p>
                <h4 className='text-center text-white'>All rights reserved by Rentiger Warehouse</h4>
            </div>
        </footer>
    );
};

export default Footer;