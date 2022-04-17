import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const handleForgotPass= async(event)=>{
        event.preventDefault()
        const email = event.target.email.value;
        await sendPasswordResetEmail(email)
        toast("sent-mail")
        
    }
    return (
        <div style={{height:'100vh'}} className='text-center mt-5 '>
            <h4 className='mb-2'>forgot your password</h4>
            <form onSubmit={handleForgotPass} >
                <input style={{ backgroundColor: "#dfe6e9" }} className=' p-1 rounded w-25  border-0' type="email" name="email" placeholder='enter your email ' required />
                <input style={{ backgroundColor: "#000", color: '#fdee17' }} className=' rounded p-2 border-0' type="submit" value="forgot" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;