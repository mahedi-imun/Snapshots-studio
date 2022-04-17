import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
          <div>
            <div className='d-flex justify-content-center'>
            <Spinner animation="border" />
            </div>
          </div>
        );
      }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;