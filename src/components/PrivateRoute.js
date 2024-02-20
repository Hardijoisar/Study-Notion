import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
export const PrivateRoute = ({isLoggedIn, children}) => {

  const navigate = useNavigate();

  if(isLoggedIn) return children;
  else{
    // navigate("/login")
    console.log("not login")
    toast.error("Please login first")
    return(
    <Navigate to="/login"></Navigate>
    )
  }
}
