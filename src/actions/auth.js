import { firebaseApp, googleAuthProvider } from '../services/firebase';

export const startLogin = () => {
  return () => {
    return firebaseApp.auth().signInWithPopup(googleAuthProvider);
  }
}
