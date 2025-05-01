// src/SignUpPage.tsx
import React, { useState } from "react";
import Input from "./components/Input";
import "./style/Auth.css";
import Button1 from "./components/Button1";
import { useNavigate } from "react-router-dom";
import Iridescence from "./components/Iridescence";
import { signUp } from "../services/authService";

const SignUpPage = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signUp(email, password, username);
			// Navigate to sign-in page after successful sign-up
			navigate("/signin");
		} catch (error) {
			console.error("Sign-up error:", error);
			// Handle error (e.g., show error message to user)
		}
	};

	const handleGotoSignIn = () => {
		navigate("/signin");
	};

	return (
		<div className="auth-container">
			<div className="auth-form">
				<form onSubmit={handleSignUp}>
					<h2>Sign Up</h2>
					<Input
						value={username}
						onChange={setUsername}
						placeholder="Username"
					/>
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
							text="Go to Sign In"
							onClick={handleGotoSignIn}
							className="auth-button"
						/>
						<Button1
							text="Sign Up"
							onClick={handleSignUp}
							className="auth-button"
						/>
					</div>
				</form>
			</div>
			<div className="auth-visual">
				<Iridescence
					color={[0.95, 0.95, 0.95]}
					mouseReact={true}
					amplitude={0.1}
					speed={1.0}
					className="iridescence-container"
				/>
				<h1>Toothless</h1>
				<p>Yes, we are happy with our brand name.</p>
			</div>
		</div>
	);
};

export default SignUpPage;
