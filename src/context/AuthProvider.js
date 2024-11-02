import { useState, useEffect, useContext, createContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
        await signOut(auth);
        setGlobalUser(null);
        setGlobalData(null);
    } 

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async(user)=> { 
            console.log("user state changed:", user, globalUser)
            setGlobalUser(user)
            console.log("user state changed:", user, globalUser)
            if(!user) return
            try {
                setIsLoading(true);
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef);

                let firebaseData = {}
                if(docSnap.exists()) {
                    firebaseData= docSnap.data();
                }
                
                setGlobalData(firebaseData)
                console.log(firebaseData, globalData)
                
            }catch(err) {
                console.log('Error fetching user data: ',err.message);
            }finally{
                setIsLoading(false);
            }
        })
        return unsubscribe;
    }, [globalUser])

    const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout };
    
    return (
        <AuthCotext.Provider value={value}>
            {isLoading ? <p className='text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</p> : props.children}
        </AuthCotext.Provider>
    )
}