import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
 
                const user = userCredential.user;
                navigate('/dashboard')
   
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                if(errorMessage.includes('user-not-found')){
                    toast.error('User not found',  {id: 'error'})
                } else if(errorMessage.includes('wrong-password')){
                    toast.error('Wrong password')
                }
                else{
                    toast.error('An error happen while loging in.')
                }
                
            });
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }
    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className=''>
            <h4 className='text-center p-3'>Please Login</h4>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
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