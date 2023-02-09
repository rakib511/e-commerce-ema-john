import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './registration.css'

const Registration = () => {
    const { newUserCreate } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('password should 6 character or more')
            return;
        }
        if (password !== confirm) {
            setError('password doesnot match')
            return;
        }

        console.log(email, password, confirm)

        newUserCreate(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <h2 className='text-center'>SignUp Please!</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p>Allready have an account?<Link to='/login'>login</Link></p>
                <Button
                    variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </div>
    );
};

export default Registration;