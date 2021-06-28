import   firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAZ63Pknk4xQFfyiI-kHKBSprPtzO9hc68",
  authDomain: "booksanta12-32f9c.firebaseapp.com",
  projectId: "booksanta12-32f9c",
  storageBucket: "booksanta12-32f9c.appspot.com",
  messagingSenderId: "351450507283",
  appId: "1:351450507283:web:d1ac2811901f6742d6f7e6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();