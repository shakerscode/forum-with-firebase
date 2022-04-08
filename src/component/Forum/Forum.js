import React from 'react';
import { useState } from 'react';
 

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
 
import Login from '../Login/Login';
import auth from '../../firebase.init';
import Register from '../Register/Register';




const provider = new GoogleAuthProvider();

const Forum = () => {
    const [forum, setFourm] = useState(false)

    const handleLogin = () => {
        console.log('clicked login')
        setFourm(false)
    }
    const handleRegister = () => {
        console.log('clicked Register')
        setFourm(true)
    }
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.error(error)
            });
    }
    const gitHubSignIn = () => {
        console.log('clicked git')
    }

    return (
        <div>

            <div className='w-50 mx-auto shadow border p-4 mt-5 rounded-3'>
                <h1 className='text-center  mb-5'>Forum</h1>
                <div className='d-flex justify-content-around'>
                    <h3 onClick={handleLogin} className='text-info bg-light cursor-class px-5 py-2'>LogIn</h3>
                    <p>or</p>
                    <h3 onClick={handleRegister} className='text-info bg-light cursor-class px-5 py-2'>Register</h3>
                </div>
                {forum ?
                    <Register></Register> : <Login></Login>
                }
                <div onClick={googleSignIn} className='google-login cursor-class d-flex justify-content-between align-items-center p-3 mt-5 w-75 mx-auto shadow border rounded-3'>
                    <div>
                        <img className='' src="https://assets.materialup.com/uploads/24347814-7a9f-4705-827f-75b2c92ecab8/attachment.jpg" alt="" width={'90px'} />
                    </div>
                    <div>
                        <h5 className=''>Continue with google</h5>
                    </div>
                </div>
                <div onClick={gitHubSignIn} className='google-login cursor-class d-flex justify-content-between align-items-center p-3 mt-3 w-75 mx-auto shadow border rounded-3'>
                    <div>
                        <img className='' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width={'90px'} />
                    </div>
                    <div>
                        <h5 className=''>Continue with gitHub</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;