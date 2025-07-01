import React, { useEffect, useState } from 'react';
import { AuthContext, provider } from './AuthContext';
import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
const[user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(loading);
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
const googleLogin = () => {
    return signInWithPopup(auth,provider)
}
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
 const logout = () => {
        return signOut(auth)
    }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
        setLoading(false)
    });
    return () => unsubscribe()
},[]);
    const userInfo = {
        createUser,
        googleLogin,
        signIn,
        logout,
        loading,
        setLoading,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;