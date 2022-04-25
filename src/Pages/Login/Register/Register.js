import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { async } from '@firebase/util';



const Register = () => {


    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateRegister = event => {
        navigate('/login')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }



    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-info my-3 '>Please Register</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control name="name" type="text" placeholder="Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Terms and Condition for Advise" />
                </Form.Group>

                <Button disabled={!agree} className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-3'>Have an Account?  <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateRegister}>Please Log In</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;