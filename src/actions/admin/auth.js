import { googleAuthProvider } from '../../firebase/firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth"

export const login = ({uid, displayName, email, photoURL}) => ({
  type: 'LOGIN',
  uid,
  displayName,
  email,
  photoURL
});

export const startLoginWithEmail = (email, password) => 
  () => signInWithEmailAndPassword(googleAuthProvider, email, password)

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => () => signOut(googleAuthProvider)
