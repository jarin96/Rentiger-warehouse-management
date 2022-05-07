import React, { useEffect } from 'react';
import pic1 from '../../images/Occationware/yasu-shots-_y6hMz1pJC0-unsplash.png';
import pic2 from '../../images/Occationware/monica-silva-VlMMBxSZuSI-unsplash.png';
import './Occasionware.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
const Occasionware = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 3000,
            easing: 'ease'
        });
    })
    return (
        <div>
            <h2 className='text-center mt-5 fs-2 fw-bold p-2 color'>OCCASION WARE</h2>
            <div id='occationware' className='container info-background my-5'>
                <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <div className='my-5 py-3'>
                            <h3 className='text-center mt-2 color'>Lace Strappy Occasionware Dress</h3>
                            <div data-aos="fade-right">
                                <img src={pic1}
                                    className="d-block w-100 img-border" alt="">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-6 col-12'>
                        <h3 className='text-center mt-2 color'>Embellished Backless Occasionware Dress</h3>
                        <div className=' mt-2' data-aos="fade-down">
                            <img src={pic2}
                                className="d-block w-100 img-border" alt="">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Occasionware;