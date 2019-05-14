import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyA3Xx5U4aq6fTIdK1OX2bFzJvUB_wnvmFc",
    authDomain: "pictures-b46f0.firebaseapp.com",
    databaseURL: "https://pictures-b46f0.firebaseio.com",
    projectId: "pictures-b46f0",
    storageBucket: "pictures-b46f0.appspot.com",
    messagingSenderId: "535691432018",
    appId: "1:535691432018:web:9e57fcc17e296346"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}