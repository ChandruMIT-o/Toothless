// src/SignInPage.tsx
import React, { useState } from "react";
import Input from "./components/Input";
import "./style/Auth.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import { useNavigate } from "react-router-dom";
import Iridescence from "./components/Iridescence";
import { signIn, resetPassword } from "../services/authService";

const SignInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signIn(email, password);
			// Navigate to dashboard or home page after successful sign-in
			navigate("/");
		} catch (error) {
			console.error("Sign-in error:", error);
			// Handle error (e.g., show error message to user)
		}
	};

	const handleGotoSignUp = () => {
		navigate("/signup");
	};

	const handleForgotPassword = async () => {
		if (!email) {
			alert("Please enter your email to reset password.");
			return;
		}
		try {
			await resetPassword(email);
			alert("Password reset email sent!");
		} catch (error) {
			console.error("Password reset error:", error);
			// Handle error (e.g., show error message to user)
		}
	};

	return (
		<div className="auth-container">
			<div className="auth-visual">
				<Iridescence
					color={[0.95, 0.95, 0.95]}
					mouseReact={true}
					amplitude={0.1}
					speed={1.0}
					className="iridescence-container"
				/>
				<h1>Welcome Back!</h1>
				<p>Sign in to continue your journey.</p>
			</div>
			<div className="auth-form">
				<form onSubmit={handleSignIn}>
					<h2>Sign In</h2>
					<Input
						value={email}
						onChange={setEmail}
						placeholder="Email"
					/>
					<Input
						value={password}
						onChange={setPassword}
						placeholder="Password"
					/>
					<div className="button-group">
						<Button1
							text="Go to Sign Up"
							onClick={handleGotoSignUp}
							className="auth-button"
						/>
						<Button1
							text="Sign In"
							onClick={handleSignIn}
							className="auth-button"
						/>
					</div>
					<Button2
						text="Forgot Password?"
						onClick={handleForgotPassword}
						className="forget-button"
					/>
				</form>
			</div>
		</div>
	);
};

export default SignInPage;
