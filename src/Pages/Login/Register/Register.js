import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3>This is Register</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="name" type="text" placeholder="Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Have an Account?  <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateRegister}>Please Log In</Link></p>

        </div >
    );
};

export default Register;