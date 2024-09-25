import {
    initializeApp
} from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {

    const firebaseConfig = {
        apiKey: "AIzaSyCpGYUHjs3iT5__uJGuuYXBT228PSbOt0o",
        authDomain: "portfolio-data-960d5.firebaseapp.com",
        projectId: "portfolio-data-960d5",
        storageBucket: "portfolio-data-960d5.appspot.com",
        messagingSenderId: "935025051493",
        appId: "1:935025051493:web:d617c9f2c846fabcd5038c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    return{
        provide: {
            firebaseApp: app,
            db,
        }
    }

})
