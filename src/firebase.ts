import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAnsWWlXZYTRhdyuATUPY13owVSsBNneMQ",
    authDomain: "lobby-dones-web.firebaseapp.com",
    projectId: "lobby-dones-web",
    storageBucket: "lobby-dones-web.firebasestorage.app",
    messagingSenderId: "45668714487",
    appId: "1:45668714487:web:af2d02410a19bbab2c10f2",
    measurementId: "G-31SCG26K0G"
};

const app = initializeApp(firebaseConfig);

export default app;
