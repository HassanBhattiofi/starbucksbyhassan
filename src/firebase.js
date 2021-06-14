import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBVPQOqEI3_npdaDqjdw5rwEyXr5fcQxYY",
  authDomain: "starbucks-b69c6.firebaseapp.com",
  projectId: "starbucks-b69c6",
  storageBucket: "starbucks-b69c6.appspot.com",
  messagingSenderId: "803783595908",
  appId: "1:803783595908:web:173213785cd614c687afd1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
