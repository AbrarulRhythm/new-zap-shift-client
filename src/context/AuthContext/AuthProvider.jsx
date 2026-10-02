import { auth } from '../../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    // Register User
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        registerUser,
        signInUser,
        name: 'Guru Ranwh',
    };

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
