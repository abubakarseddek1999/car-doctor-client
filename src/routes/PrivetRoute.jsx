/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import  { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    console.log(loading);

    if(loading){
       return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" > </Navigate>;
};

export default PrivetRoute;