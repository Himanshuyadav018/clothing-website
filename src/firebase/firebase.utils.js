import firebase from 'firebase/compat/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import 'firebase/compat/firestore'


const config = {
  apiKey: "AIzaSyAlNmp3e3M-6r8n9-v9NEORnkZehixABbc",
  authDomain: "clothing-website-787ae.firebaseapp.com",
  projectId: "clothing-website-787ae",
  storageBucket: "clothing-website-787ae.appspot.com",
  messagingSenderId: "536282958912",
  appId: "1:536282958912:web:b1718192dfd896d46be3a5",
  measurementId: "G-CT361TXTJW"
  }

const app = firebase.initializeApp(config)

export const auth = getAuth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (user, optionalData) => {
  if(!user) return;
  
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapShot = await userRef.get()

  const {displayName, email } = user
  const createdAt = new Date()

  try{
    if(!snapShot.exists) {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...optionalData
      })
    }
  }catch(error) {
    console.log(error.message)
  }

  return userRef
}

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export default firebase