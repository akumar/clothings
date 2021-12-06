import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBNXjKu0EDMBmfzEhRzDEhA1WEmdOJSQCc",
  authDomain: "crwn-db-f7f1d.firebaseapp.com",
  projectId: "crwn-db-f7f1d",
  storageBucket: "crwn-db-f7f1d.appspot.com",
  messagingSenderId: "366503273207",
  appId: "1:366503273207:web:1a7bd26b02d08f783e29f2",
  measurementId: "G-V3SVZV886G"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error while creating user', error);
    }
  }
  return userRef;

}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase