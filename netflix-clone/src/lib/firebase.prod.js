import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from "../seed";


const config = {
    apiKey: "AIzaSyCu9SmFEiLzBSD_LehR9TdskFL5XwEWo2o",
    authDomain: "netflix-clone-9c95e.firebaseapp.com",
    projectId: "netflix-clone-9c95e",
    storageBucket: "netflix-clone-9c95e.appspot.com",
    messagingSenderId: "128062938785",
    appId: "1:128062938785:web:392fb4b6acd212452b5ae0"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export {firebase};