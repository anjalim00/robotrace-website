import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAvcyDicb4-HShKDRvS4tSZZi_4Vph_a4",
    authDomain: "robot-race-f9a45.firebaseapp.cpm",
    databaseURL: "https://robot-race-f9a45-default-rtdb.firebaseio.com",
    projectId: "robot-race-f9a45",
    storageBucket: "robot-race-f9a45.firebasestorage.app",
    appId: "1:283914971885:android:42b096d91e24394363fae4"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
