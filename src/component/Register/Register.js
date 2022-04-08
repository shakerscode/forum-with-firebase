import React from 'react';
import { Form } from 'react-bootstrap';
import './Register.css'

const Register = ({ btn }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  

    return (
        <div className=''>
            <h4 className='text-center p-3'>Please Register</h4>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Remember password" />
                    </Form.Group>
                    <input onClick={handleSubmit} className='border text-white bg-primary px-3 py-2 rounded' type="submit" value="Submit" />
                </Form>
            </div>
        </div>
    );
};

export default Register;