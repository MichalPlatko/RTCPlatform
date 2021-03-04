import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2x8ouCyhjn1HDdZ3WSu1CXU83Tvz-HTk",
    authDomain: "rtcplatform-8caa4.firebaseapp.com",
    projectId: "rtcplatform-8caa4",
    storageBucket: "rtcplatform-8caa4.appspot.com",
    messagingSenderId: "403528315216",
    appId: "1:403528315216:web:83b9d24d87dec76fad7c55"
};
// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;