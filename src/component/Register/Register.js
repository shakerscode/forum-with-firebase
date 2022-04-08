import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'

const Register = ({ btn }) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState('')

    const [email, setEmail] = useState({value: '', error: ''});
  

    const [password, setPassword] = useState({value: '', error: ''});
    const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''});
    console.log(confirmPassword)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email.value === ''){
            setEmail({value: '', error: 'Email is required'})
        }
        if(password.value === ''){
            setPassword({value: '', error: 'Password is required'})
        }


        if(email.value && password.value && confirmPassword.value === password.value){
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                // setUser(user)
                navigate('/dashboard')
 
            })
            .catch((error) => {
                console.error(error)
              
            });
        }

    }

    const getUserName = (event) => {
        const name = event.target.value;

    }

    const getUserEmail = (event) => {
        const email = event.target.value;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            
            setEmail({value: email, error: ''})
        } else{
            setEmail({value: '', error: 'Please enter a valid email'})
        }
    }

    const getUserPassword = (event) => {
        const password = event.target.value;
        if( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password) ){
            setPassword({value: password, error: ''})

        }else{
            setPassword({value: '', error: 'Minimum eight characters, at least one uppercase, one lowercase letter and one number'})
        }
    }
    const getConfirmedPassword = (event) => {
        const confirmPass = event.target.value;
        if(password.value === confirmPass){
            setConfirmPassword({value: confirmPass, error: ''});
        }else{

            setConfirmPassword({value: '', error: 'Password dont match'});
        }
    }
    return (
        <div className=''>
            <h4 className='text-center p-3'>Please Register</h4>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={getUserName} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getUserEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    {
                        email?.error && <p className='text-danger'>{email.error}</p>
                    }
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        password?.error && <p className='text-danger'>{password.error}</p>
                    }
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={getConfirmedPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        confirmPassword?.error && <p className='text-danger'>{confirmPassword.error}</p>
                    }
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