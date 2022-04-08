import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
    }
 
    return (
        <div className=''>
            <h4 className='text-center p-3'>Please Login</h4>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Remember password" />
                    </Form.Group>
                    <input onClick={handleLogin} className='border text-white bg-primary px-3 py-2 rounded' type="submit" value="Login" />
                </Form>
 
            </div>
        </div>
    );
};

export default Login;