import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.googleProvider.addScope('email');

    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.facebookProvider.addScope('email');

    this.githubProvider = new app.auth.GithubAuthProvider();
    this.githubProvider.addScope('user');
    this.githubProvider.addScope('user:email');
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithGithub = () =>
    this.auth.signInWithPopup(this.githubProvider);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');

}

export const FirebaseContext = React.createContext(null);
