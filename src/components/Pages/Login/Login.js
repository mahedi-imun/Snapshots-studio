import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../../images/google-logo.png'
import { async } from '@firebase/util';
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    let errorElement;
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (error || googleError) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if(user){
        navigate(from, { replace: true });
    }
    const handleGoogleLogin = async () => {
        await signInWithGoogle()
        navigate(from, { replace: true });

    }
    const handleFromSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password)
    }
    return (
        <div style={{ height: '90vh' }} className='container d-flex align-items-center flex-column mt-3 '>
            <div className='mb-3'><h4>Login</h4> </div>
            <form
                onSubmit={handleFromSubmit}
                className='d-flex align-items-center flex-column w-100 bo' >
                <input
                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0'
                    type="email" name="email" placeholder='email' required />

                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="password" placeholder='password'required  />
                {errorElement ? errorElement : ''}
                <input style={{ backgroundColor: "#000", color: '#fdee17' }} className='w-25 btn ' type="submit" value="Login" />
            </form>
            <p className='mt-2'> if you don't have account ? <Link className=''
                style={{ color: "#000" }}
                to='/signup'>signup</Link></p>
            <button
                onClick={() => handleGoogleLogin()}
                style={{ fontWeight: '600' }}
                className='w-25 btn bold border'>
                <img style={{ width: '40px' }} src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default Login;