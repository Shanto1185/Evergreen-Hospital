import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {  useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleEmail = e=> {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleCreateNewUser = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password shuld be at least 6 character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name})
            .then(result=> { })       
    }

    const handleLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
        })
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    },[])
    
    return {
        user,
        error,
        handleEmail,
        handlePassword,
        handleName,
        handleCreateNewUser,
        handleLogIn,
        googleSignIn
    }
}

export default useFirebase;  