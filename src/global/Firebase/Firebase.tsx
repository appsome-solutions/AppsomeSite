import firebase from 'firebase';

// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_CLOUD_FIRESTORE_PROJECT_ID,
});

const db = firebase.firestore();

export default () => {
  db.collection('subscriptions')
    .add({
      email: 'test2@wp.pl',
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};
