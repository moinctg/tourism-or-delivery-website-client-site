
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Link,
    useHistory,
    useLocation
    
  } from "react-router-dom";

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri= location.state?.from || '/home';
    // console.log('come from',location.state?.from);
  
    const handleGoogleSign = () => {
     signInUsingGoogle()
     .then(result=>{
         history.push(redirect_uri);
        
    })
    }
    return (
        <div className="py-6 text-center">
            <h2 className="text-center ">Please Login <span>with Google </span>  </h2>
            <button onClick={handleGoogleSign}   className="btn btn-warning  ">Google Sign In</button>

         {/* <Link href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </Link> */}
        </div>
    );
};

export default Login;