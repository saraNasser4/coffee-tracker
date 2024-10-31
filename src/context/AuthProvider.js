import { useState, useEffect, useContext, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore';

const AuthCotext = createContext();

export const useAuth = () => useContext(AuthCotext);

export function AuthProvider(props) {
    const [globalUser, setGlobalUser] = useState(null);
    const [globalData, setGlobalData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = (email, password) => {
        setGlobalUser(null);
        setGlobalData(null);
        signOut(auth, email, password);
    }
    const resetPass = (email)=> sendPasswordResetEmail(auth, email)

    const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout, resetPass };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async(user)=> { 
            setGlobalUser(user)
            if(!user) return
            try {
                setIsLoading(true);
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef);

                let firebaseData = {}
                if(docSnap.exists()) firebaseData= docSnap.data();

                setGlobalData(firebaseData)
                
            }catch(err) {
                console.log(err.massage);
            }finally{
                setIsLoading(false);
            }
        })
        return unsubscribe;
    }, [])
    return (
        <AuthCotext.Provider value={value}>
            {props.children}
        </AuthCotext.Provider>
    )
}