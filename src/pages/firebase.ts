// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBz0cV9OnMbJQ8DeSazSjLY1FdrN-4Hc7g",
	authDomain: "toothless-57954.firebaseapp.com",
	projectId: "toothless-57954",
	storageBucket: "toothless-57954.appspot.com",
	messagingSenderId: "768413125119",
	appId: "1:768413125119:web:6d634d470cad145750ffca",
	measurementId: "G-1417XXM38W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Analytics and get a reference to the service
export const analytics = getAnalytics(app);
