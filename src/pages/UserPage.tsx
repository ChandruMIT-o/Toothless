// src/pages/UserPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./style/UserPage.css";

type BookingData = {
	name: string;
	service: string;
	date: string;
	time: string;
	email: string;
};

const UserPage: React.FC = () => {
	const { username } = useParams<{ username: string }>();
	const [booking, setBooking] = useState<BookingData | null>(null);
	const navigate = useNavigate();
	const auth = getAuth();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (!user) navigate("/signin");
		});
		return unsub;
	}, [auth, navigate]);

	useEffect(() => {
		const raw = localStorage.getItem("bookingData");
		if (raw) {
			try {
				setBooking(JSON.parse(raw));
			} catch {
				setBooking(null);
			}
		}
	}, []);

	const handleLogout = async () => {
		await signOut(auth);
		localStorage.removeItem("bookingData");
		navigate("/signin");
	};

	const handleBack = () => {
		navigate("/"); // or navigate(-1) to go to previous page
	};

	return (
		<div className="user-page">
			<div className="left-section-up">
				<div>
					<button onClick={handleBack} className="back-btn">
						← Back
					</button>
					<h2>
						{booking
							? `Hello, ${booking.name}!`
							: `Welcome, ${username}`}
					</h2>

					{booking ? (
						<div className="booking-card">
							<h3>Your Appointment Details</h3>
							<div className="field">
								<span className="label">Service:</span>
								<span className="value">{booking.service}</span>
							</div>
							<div className="field">
								<span className="label">Date:</span>
								<span className="value">{booking.date}</span>
							</div>
							<div className="field">
								<span className="label">Time:</span>
								<span className="value">{booking.time}</span>
							</div>
							<div className="field">
								<span className="label">Email:</span>
								<span className="value">{booking.email}</span>
							</div>
						</div>
					) : (
						<p>No booking found.</p>
					)}
				</div>

				<div className="btn-group">
					<button
						onClick={handleLogout}
						className="logout-btn logout-extra"
					>
						Log Out
					</button>
				</div>
			</div>
			<div className="right-section-up">
				<video
					className="bg-video"
					src="/bg.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
			</div>
		</div>
	);
};

export default UserPage;
