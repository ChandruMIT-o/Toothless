// src/services/authService.ts
import { auth } from "../pages/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	updateProfile,
} from "firebase/auth";

export const signUp = async (
	email: string,
	password: string,
	username: string
) => {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	);
	await updateProfile(userCredential.user, { displayName: username });
};

export const signIn = async (email: string, password: string) => {
	await signInWithEmailAndPassword(auth, email, password);
};

export const resetPassword = async (email: string) => {
	await sendPasswordResetEmail(auth, email);
};
