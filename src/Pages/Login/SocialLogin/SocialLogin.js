import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import social from '../../../images/Social/google-logo-png.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorMessage}
            <div className='mt-5'>
                <button onClick={() => signInWithGoogle()} className='w-50 btn btn-light btn btn-outline-dark d-block mx-auto'>
                    <img src={social} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;