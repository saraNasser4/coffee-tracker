import { useState, useEffect, useContext, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore';

const AuthCotext = createContext();

export const useAuth = () => useContext(AuthCotext);

export function AuthProvider(props) {
    const [globalUser, setGlobalUser] = useState(null);
    const [globalData, setGlobalData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (email, password)=> await createUserWithEmailAndPassword(auth, email, password);
    const login = async (email, password)=> await signInWithEmailAndPassword(auth, email, password);
    const logout = async ()=>{
        setGlobalUser(null);
        setGlobalData(null);
        await signOut(auth);
    } 

    const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout };
    
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