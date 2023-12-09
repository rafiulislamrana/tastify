import { createContext, useEffect, useState } from "react";
import app from "../../src/Firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const [err, setErr] = useState("");
    const [cart, setCart] = useState([])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const update = (name, url) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        });
        location.reload()
    }

    const HandleGoogleRegi = () => {
        setErr('');
        signInWithPopup(auth, googleProvider)
            .then(res => {
                Swal.fire('Your Account Created Successfully!!');
                console.log(res)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const HandleGoogle = () => {
        setErr('');
        signInWithPopup(auth, googleProvider)
            .then(res => {
                Swal.fire('You Logged in Successfully!!');
                console.log(res);
            })
            .catch(err => console.error(err))
    }

    const authInfo = {
        user,
        loading,
        createUser,
        update,
        err,
        setErr,
        HandleGoogleRegi,
        logOut,
        login,
        HandleGoogle,
        cart,
        setCart
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;