import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext(null)
 export const provider  = new GoogleAuthProvider()