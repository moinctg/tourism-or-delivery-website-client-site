import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import intializeAuthentication from './../Pages/Login/Firebase/firebase.init';

 intializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsloading] = useState(true);
    
    const auth = getAuth();

    //  Google Sign in 
    const signInUsingGoogle = () =>{
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
     return signInWithPopup(auth,googleProvider)
       
        .finally(()=> setIsloading(false));
    }

    useEffect( () =>{

        const loggedin = onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user);
        }
        else{
            setUser({})
        }
        setIsloading(false);
        });
        return ()=>loggedin;
    }
        ,[])
        const logOut = ()=>{

            setIsloading(true)
            signOut(auth)
            .then(()=>{
            })
            // .finally(()=> isLoading(false));
        }
        return{
            user,
            isLoading,
            signInUsingGoogle,
            logOut
        }



    
};

export default useFirebase;