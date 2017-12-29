import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCsBUnb4Jn_BxuS7E6mIbPw607FNXIju3g",
  authDomain: "damengpieces.firebaseapp.com",
  databaseURL: "https://damengpieces.firebaseio.com",
  projectId: "damengpieces",
  storageBucket: "damengpieces.appspot.com",
  messagingSenderId: "1024103736555"
};

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firebaseApp = firebase.initializeApp(config);
