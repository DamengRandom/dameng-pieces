import { firebaseApp, googleAuthProvider } from '../services/firebase';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
}

export const startLogin = () => {
  return () => {
    return firebaseApp.auth().signInWithPopup(googleAuthProvider);
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}