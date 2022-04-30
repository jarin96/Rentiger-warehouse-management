// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARP0dqtEjNfMO8yWux5KwnHMEyHSvzA6A",
    authDomain: "rentiger-warehouse.firebaseapp.com",
    projectId: "rentiger-warehouse",
    storageBucket: "rentiger-warehouse.appspot.com",
    messagingSenderId: "659600204662",
    appId: "1:659600204662:web:3472b1ad0fd104204bd057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;