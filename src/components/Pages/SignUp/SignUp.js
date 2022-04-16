import React, { useState } from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import googleLogo from '../../../images/google-logo.png'
const SignUp = () => {
    let errorElement;
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating,] = useUpdateProfile(auth);
    if (error || googleError) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {

        }
        if (email && password && name) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            alert('successful create account');
            // navigate('/home')
        } else {
            alert('please full fill all input')
        }
    }
    return (
        <div className='container d-flex align-items-center flex-column mt-3 '>
            <div className='mb-3'><h4>Sign Up</h4> </div>
            <form
                onSubmit={handleFormSubmit}
                className='d-flex align-items-center flex-column w-100 bo' >
                <input

                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0'
                    type="text" name="name" placeholder='name' />
                <input
                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0'
                    type="email" name="email" placeholder='email' />

                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="password" placeholder='password' />
                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="confirmPassword" placeholder='confirm password' />
                {errorElement ? errorElement : ''}
                <input style={{ backgroundColor: "#000", color: '#fdee17' }} className='w-25 btn ' type="submit" value="Sign Up" />
            </form>
            <p className='mt-2'>  already have an account ? <Link className=''
                style={{ color: "#000" }}
                to='/login'>Login</Link></p>
            <button
                onClick={() => signInWithGoogle()}
                style={{ fontWeight: '600' }}
                className='w-25 btn bold border'>
                <img style={{ width: '40px' }} src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default SignUp;