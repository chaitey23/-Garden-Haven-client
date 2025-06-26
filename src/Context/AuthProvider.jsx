import React from 'react';
import { AuthContext, provider } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
const googleLogin = () => {
    return signInWithPopup(auth,provider)
}
const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
    const userInfo = {
        createUser,
        googleLogin,
        signIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;