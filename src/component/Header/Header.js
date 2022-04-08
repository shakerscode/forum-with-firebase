import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, setUser] = useState({})


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser('')
            }
        });
    }, [])

    const googleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }


    return (
        <div className='w-100 text-center header-div d-flex justify-content-center align-items-center'>

            <a href="/home">Home</a>
            <a href="/dashboard">Dashboard</a>
            {
                user ? <><h6>{user.displayName}</h6> <button className='border-0 ms-4 px-3 py-2 rounded bg-success text-white' onClick={googleSignOut}>Sign Out</button></> : <a href="/login">LogIn</a>
            }



        </div>
    );
};

export default Header;