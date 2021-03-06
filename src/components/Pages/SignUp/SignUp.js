
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../Firebase.init';
import googleLogo from '../../../images/google-logo.png'
const SignUp = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithGoogle, googleUser,
        googleLoading, googleError
    ] = useSignInWithGoogle(auth);
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
    if (loading || googleLoading) {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <Spinner animation="border" />
                </div>
            </div>
        );
    }
    if (user || googleUser) {
        navigate(from, { replace: true })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password mismatch!',
            })
        }
    }
    return (
        <div className='container d-flex align-items-center flex-column mt-3 '>
            <div className='mb-3'><h4>Sign Up</h4> </div>
            <form
                onSubmit={handleFormSubmit}
                className='d-flex align-items-center flex-column w-100 bo' >
                <input

                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-50  border-0'
                    type="text" name="name" placeholder='name' required />
                <input
                    style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-50  border-0'
                    type="email" name="email" placeholder='email' required />

                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-50  border-0' type="password" name="password" placeholder='password' required />
                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-50  border-0' type="password" name="confirmPassword" placeholder='confirm password' required />
                {errorElement ? errorElement : ''}

                <input style={{ backgroundColor: "#000", color: '#fdee17' }} className='w-50 btn ' type="submit" value="Sign Up" />
            </form>
            <p className='mt-2'>
                already have an account ?
                <Link
                    style={{ color: "#000" }}
                    to='/login'>Login
                </Link>
            </p>
            <button
                onClick={() => signInWithGoogle()}
                style={{ fontWeight: '600' }}
                className='w-50 btn bold border mb-5'>
                <img style={{ width: '40px' }}
                    src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default SignUp;