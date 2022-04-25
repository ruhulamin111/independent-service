import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home')
    }


    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='w-100 btn btn-primary mb-5 text-white d-block'>Google Login</button>

        </div>
    );
};

export default SocialLogin;