import React from 'react';
import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/firestore';
import { FirebaseProvider as ContextFirebaseProvider } from './FirebaseContext';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CLOUD_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
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
