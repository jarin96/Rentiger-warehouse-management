import React from 'react';
import gif from '../../images/Collection/video_second.gif';
import './Collection.css';
const Collection = () => {
    return (
        <div className='collection-container'>
            <h2 className='text-center mt-5 fs-2 fw-bold p-2'>NEW COLLECTION</h2>
            <div id='collection' className='container info-background my-5'>
                <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <div className='my-5 py-3'>
                            <h3 className='text-center mt-2'>New collection</h3>
                            <h1 className='text-center fs-1 fw-bolder'>Spring Summer 2022</h1>
                            <p className='text-center'>In spring-summer, fabrics like cotton, eyelet, tropical wool and linen are the most commonly used for spring dresses as well as shorts or beach wear, these types of fabric soak sweat and allow the air to flow in the clothes for a fresher feeling on hot days.</p>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-6 col-12'>
                        <div className=' mt-2'>
                            <img src={gif}
                                className="d-block w-100 " alt="">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;