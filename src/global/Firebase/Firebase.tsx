import React from 'react';
import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/firestore';
import { FirebaseProvider as ContextFirebaseProvider } from './FirebaseContext';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  projectId: `${process.env.REACT_APP_CLOUD_FIRESTORE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  appId: process.env.APP_ID,
  authDomain: process.env.AUTH_DOMAIN,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  databaseUrl: process.env.DATABASE_URL,
  measurementId: process.env.MEASUREMENT_ID,
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
