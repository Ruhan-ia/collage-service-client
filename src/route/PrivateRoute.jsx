import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const PrivateRoutes = ({children}) => {

   const {user, loader} = useContext(AuthContext)
  
    const location = useLocation()

    if(loader){
        return<progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;