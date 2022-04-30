import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../../images/Login Page/Register.png';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const submitRegister = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2 className='text-center mt-5 fs-2 fw-bold p-2'>WELCOME TO RENTIGER WAREHOUSE</h2>
            <div id='collection' className='container info-background my-5'>
                <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                    <div className='col-lg-7 col-md-6 col-12'>
                        <div className='my-5 py-3'>
                            <div className='register-container'>
                                <h2 className='text-center mt-2 fs-2 fw-bold'>PLEASE REGISTER</h2>
                                <form onSubmit={submitRegister}>
                                    <input type="text" name="name" id="" placeholder='Your Name' />
                                    <input type="email" name="email" id="" placeholder='Your Email' required />
                                    <input type="password" name="password" id="" placeholder='Password' required />
                                    <input type="submit" value="Register" />
                                </form>
                                <h5 className='mt-4'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <div className=' mt-2'>
                            <img src={register}
                                className="d-block w-100 " alt="">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;