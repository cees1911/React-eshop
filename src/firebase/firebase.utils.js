import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBMxjO0ZmqTPxvSs-gh5VmcgJHSLxf8z10',
  authDomain: 'cees-eshop.firebaseapp.com',
  databaseURL: 'https://cees-eshop.firebaseio.com',
  projectId: 'cees-eshop',
  storageBucket: 'cees-eshop.appspot.com',
  messagingSenderId: '836698462340',
  appId: '1:836698462340:web:948f320fd2eb5219e9cad1',
  measurementId: 'G-53752F78GE',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user, error.message');
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
