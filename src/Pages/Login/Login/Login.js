import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import login from '../../../images/Login Page/Login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        const auth = localStorage.getItem('token')
        if (auth) {
            navigate(from, { replace: true });
        }
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        const user = {
            email: email
        }
        fetch(`https://protected-dusk-73186.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                localStorage.setItem('token', JSON.stringify(data));
            })



    }

    const navigateToRegister = e => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email');
        }
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
                                <Button className='mt-4 btn-inventory btn btn-outline-light w-50 mx-auto d-block' type="submit">
                                    Login
                                </Button>
                            </Form>
                            {errorMessage}
                            <h5 className='mt-4 text-center'>New to Rentiger Warehouse? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link></h5>

                            <h5 className='mt-4 text-center'>Forget Password? <button className='btn btn-link btn btn-lg text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></h5>
                            <SocialLogin></SocialLogin>
                            <ToastContainer />
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