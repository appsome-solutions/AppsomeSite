import React from 'react';
import firebase from 'firebase';
import { FirebaseProvider as ContextFirebaseProvider } from './FirebaseContext';

// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CLOUD_FIRESTORE_PROJECT_ID,
});

const db = firebase.firestore();

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => (
  <ContextFirebaseProvider
    value={{
      db,
    }}
  >
    {children}
  </ContextFirebaseProvider>
);
