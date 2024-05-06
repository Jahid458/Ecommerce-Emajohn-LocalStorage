import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Navigate, useLoaderData } from 'react-router-dom';

const RequireAuth = ({children}) => {
  const [user] = useAuthState(auth);
  const location = useLoaderData();
  if(!user){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
  return children;
}

export default RequireAuth; 