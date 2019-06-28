import * as firebase from 'firebase/app'
//import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAxxKv8VA0rXu1vOLEkweTtFrPN1YVlXrM",
    authDomain: "marioplan-f3927.firebaseapp.com",
    databaseURL: "https://marioplan-f3927.firebaseio.com",
    projectId: "marioplan-f3927",
    storageBucket: "marioplan-f3927.appspot.com",
    messagingSenderId: "567606756697",
    appId: "1:567606756697:web:bd8f8ae9f56aa575"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;