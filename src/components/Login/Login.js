import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './login.css'

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));



    }
    return (
        <div>
            <h2 className='text-center'>Please log in now!</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p>NewUser?<Link to='/registration'>create an account</Link></p>

                {/* <Link to='/shop'> */}
                <Button
                    variant="primary" type="submit">
                    login
                </Button>
                {/* </Link> */}
            </Form>
        </div>
    );
};

export default Login;