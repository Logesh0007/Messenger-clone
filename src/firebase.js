import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr_UjXkzS5oNIENrqpW9dTcyPm_GxrhKc",
    authDomain: "messenger-clone-cdb4f.firebaseapp.com",
    projectId: "messenger-clone-cdb4f",
    storageBucket: "messenger-clone-cdb4f.appspot.com",
    messagingSenderId: "956562160406",
    appId: "1:956562160406:web:ae06ed852045ca8a60ee37",
    measurementId: "G-43KT07ZH6Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const colRef = collection(db, 'messages')

export default db;
export { colRef };