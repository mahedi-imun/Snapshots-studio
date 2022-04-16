import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { signInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../../images/google-logo.png'
const Login = () => {
    const [signInWithGoogle, googleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);

    const handleFromSubmit = (e) => {
        e.preventDefault()
        // signInWithEmailAndPassword()

    }
    return (
        <div style={{ height: '90vh' }} className='container d-flex align-items-center flex-column mt-3 '>
            <div className='mb-3'><h4>Login</h4> </div>
            <form
            onSubmit={handleFromSubmit}
                className='d-flex align-items-center flex-column w-100 bo' >
                <input
                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0'
                     type="email" name="email" placeholder='email' />

                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="password" placeholder='password' />
                <input style={{ backgroundColor: "#000", color: '#fdee17' }} className='w-25 btn ' type="submit" value="Login" />
            </form>
            <p className='mt-2'> if you don't have account ? <Link className=''
                style={{ color: "#000" }}
                to='/signup'>signup</Link></p>
            <button
                onClick={() => signInWithGoogle()}
                style={{ fontWeight: '600' }}
                className='w-25 btn bold border'>
                <img style={{ width: '40px' }} src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default Login;