import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebse/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext =createContext(null)

const provider = new GithubAuthProvider();
const provider2 = new GoogleAuthProvider()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [loader, setLoader] =useState(true)

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoader(true)
      return  signOut(auth)
    }

    const gitHub=() =>{
       return signInWithPopup(auth, provider)
    }

    const google = () =>{
        return signInWithPopup(auth, provider2)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser)
            setLoader(false)
        })

        return () =>{
            unsubscribe()
        }
    }, [])

    const authInfo ={
            user,
            createUser,
            logIn,
            loader,
            logOut,
            gitHub,
            google
            
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;