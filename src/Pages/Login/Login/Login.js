import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import login from '../../../images/Login Page/Login.png';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateToRegister = e => {
        navigate('/register');
    }
    return (
        <div>
            <h2 className='text-center mt-5 fs-2 fw-bold p-2'>WELCOME TO RENTIGER WAREHOUSE</h2>
            <div id='collection' className='container info-background my-5'>
                <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                    <div className='col-lg-7 col-md-6 col-12'>
                        <div className='my-5 py-3'>
                            <h2 className='text-center mt-2 fs-2 fw-bold'>PLEASE LOGIN</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className='btn-inventory btn btn-outline-light' type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <h5 className='mt-4'>New to Rentiger Warehouse? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link></h5>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-12'>
                        <div className=' mt-2'>
                            <img src={login}
                                className="d-block w-100 " alt="">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;