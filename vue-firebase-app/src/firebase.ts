import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: 'AIzaSyAz86hXeg-ceVBcOekUHDrVwQ1sumYXuYI',
  authDomain: 'vue-todo-app-f2692.firebaseapp.com',
  projectId: 'vue-todo-app-f2692',
  storageBucket: 'vue-todo-app-f2692.appspot.com',
  messagingSenderId: '359249764690',
  appId: '1:359249764690:web:33ad60794b5276dfde1a8b'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firebase, db, auth, timestamp }
