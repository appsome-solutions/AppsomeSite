import firebase from 'firebase';
import { createCtx } from 'helpers/Context';

type FirebaseContextType = {
  db: firebase.firestore.Firestore;
};

const [useFirebase, FirebaseProvider] = createCtx<FirebaseContextType>();

export { useFirebase, FirebaseProvider };
