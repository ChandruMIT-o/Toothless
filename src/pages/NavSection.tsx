import React, { useState, useEffect } from "react";
import "./style/NavSection.css";
import { User } from "firebase/auth";
import { auth } from "../pages/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// 1️⃣ Define your two lists of sections:
const NAV_LINKS = ["home", "about", "services", "doctor", "location"] as const;

const ALL_SECTIONS = [...NAV_LINKS, "book"] as const;
type SectionID = (typeof ALL_SECTIONS)[number];

// 2️⃣ A single labels map that covers every SectionID:
const LABELS: Record<SectionID, string> = {
	home: "Home",
	about: "About",
	services: "Our Services",
	doctor: "Our Doctors",
	location: "Location",
	book: "Book Online",
};

const scrollToSection = (id: SectionID) => {
	const el = document.getElementById(id);
	if (el)
		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
};

const NavSection: React.FC = () => {
	const [active, setActive] = useState<SectionID>("home");
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [displayName, setDisplayName] = useState<string | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setDisplayName(user.displayName || user.email);
			} else {
				setCurrentUser(null);
				setDisplayName("");
			}
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate("/signin");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						setActive(e.target.id as SectionID);
					}
				});
			},
			{ threshold: 0.6 }
		);
		ALL_SECTIONS.forEach((id) => {
			const sec = document.getElementById(id);
			if (sec) obs.observe(sec);
		});
		return () => obs.disconnect();
	}, []);

	const isHome = active === "home" || active === "location";

	return (
		<div className={`nav-section ${isHome ? "home-nav" : "other-nav"}`}>
			<div className={`brand-bg ${isHome ? "in" : "out"}`}>
				<img
					className="brand-logo-nav"
					src="logo.png"
					alt="Toothless Logo"
				/>
				<div className="brand-text-nav">Toothless</div>
			</div>

			<div className="nav-btnd">
				{/* map only NAV_LINKS here (so 'book' never shows up) */}
				{NAV_LINKS.map((key) => (
					<div
						key={key}
						className="nav-btn"
						onClick={() => scrollToSection(key)}
					>
						{LABELS[key]}
					</div>
				))}

				{/* inject Book Online as a nav-btn in non-home sections */}
				{!isHome && (
					<div
						className="nav-btn book-inline"
						onClick={() => scrollToSection("book")}
					>
						{LABELS.book}
					</div>
				)}
			</div>

			{isHome && (
				<div className="auth-buttons">
					{currentUser ? (
						<>
							<span
								className="user-name"
								onClick={() => navigate(`/user/${displayName}`)}
							>
								{displayName}
							</span>
							<button
								className="logout-btn"
								onClick={handleLogout}
							>
								Logout
							</button>
						</>
					) : (
						<button
							className="login-btn"
							onClick={() => navigate("/signin")}
						>
							Login
						</button>
					)}
				</div>
			)}

			{/* standalone Book Online only on home */}
			{isHome && (
				<div
					className="book-online-btn"
					onClick={() => scrollToSection("book")}
				>
					{LABELS.book}
				</div>
			)}
		</div>
	);
};

export default NavSection;
