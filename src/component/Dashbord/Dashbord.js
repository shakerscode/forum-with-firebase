import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';

const Dashbord = () => {
    const [user, setUser] = useState({})
    console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser('')
            }
        });
    }, [])
    return (
        <div>
            <h1 className='text-center mb-4'>This is Users Dashboard</h1>
            <div className='w-50 mx-auto text-center'>
                <h2>Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Dashbord;