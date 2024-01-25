// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain: process.env.FIREBASE_AUTHDOMAIN,
// 	projectId: process.env.FIREBASE_PROJECTID,
// 	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
// 	messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
// 	appId: process.env.FIREBASE_APPID,
// 	measurementId: process.env.FIREBASE_MEASUREMENTID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAx-LfgWhahmoX6cuqoe31OtRbY48ymQo",
  authDomain: "pintar-ai-4bc2f.firebaseapp.com",
  projectId: "pintar-ai-4bc2f",
  storageBucket: "pintar-ai-4bc2f.appspot.com",
  messagingSenderId: "973570881117",
  appId: "1:973570881117:web:0fabdcbfaf5ebc52613fb4",
  measurementId: "G-61ST59K79F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);