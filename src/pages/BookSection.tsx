import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { services } from "./ServicesData"; // adjust path
import "./style/BookSection.css";

const BookSection = () => {
	const [selectedService, setSelectedService] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [user, setUser] = useState<any>(null);

	const [errors, setErrors] = useState({
		name: "",
		service: "",
		date: "",
		time: "",
	});

	const navigate = useNavigate();
	const auth = getAuth();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
		});
		return unsubscribe;
	}, [auth]);

	const validate = () => {
		const errs: typeof errors = {
			name: "",
			service: "",
			date: "",
			time: "",
		};
		if (!name.trim()) errs.name = "Name is required.";
		if (!selectedService) errs.service = "Please select a service.";
		if (!date) errs.date = "Please pick a date.";
		if (!time) errs.time = "Please pick a time.";
		setErrors(errs);
		return Object.values(errs).every((e) => !e);
	};

	const handleBooking = () => {
		// redirect if not logged in
		if (!user) {
			navigate("/signin");
			return;
		}

		// run validations
		if (!validate()) return;

		const bookingData = {
			name: name.trim(),
			service: selectedService,
			date,
			time,
			email: user.email,
		};
		localStorage.setItem("bookingData", JSON.stringify(bookingData));
		navigate(`/user/${user.displayName || user.email}`);
	};

	return (
		<div id="book" className="book-section">
			<div className="book-section-container">
				<motion.div
					className="left-book-section"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="book-section-hero-text"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
					>
						Book Online
					</motion.div>
					<motion.div
						className="book-section-hero-text go-up"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						Now <span className="accent-color">*</span>
					</motion.div>

					<motion.div
						className="input-container"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						{/* Name */}
						<motion.input
							placeholder="Your Name"
							className={`input-box${
								errors.name ? " error" : ""
							}`}
							value={name}
							onChange={(e) => {
								setName(e.target.value);
								if (errors.name)
									setErrors({ ...errors, name: "" });
							}}
							whileFocus={{
								borderColor: "var(--accent-color)",
								scale: 1.02,
							}}
							transition={{ duration: 0.2 }}
						/>
						{errors.name && (
							<div className="field-error">{errors.name}</div>
						)}

						{/* Service dropdown */}
						<motion.select
							className={`input-select-box${
								errors.service ? " error" : ""
							}`}
							value={selectedService}
							onChange={(e) => {
								setSelectedService(e.target.value);
								if (errors.service)
									setErrors({ ...errors, service: "" });
							}}
							whileFocus={{
								borderColor: "var(--accent-color)",
								scale: 1.02,
							}}
						>
							<option value="" disabled>
								Select a Service
							</option>
							{services.map((svc) => (
								<option key={svc.slug} value={svc.title}>
									{svc.title}
								</option>
							))}
						</motion.select>
						{errors.service && (
							<div className="field-error">{errors.service}</div>
						)}

						{/* Date & Time */}
						<motion.div
							className="input-container-sub"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							<div>
								<motion.input
									type="date"
									className={`input-box input-box-sub${
										errors.date ? " error" : ""
									}`}
									value={date}
									onChange={(e) => {
										setDate(e.target.value);
										if (errors.date)
											setErrors({ ...errors, date: "" });
									}}
									whileFocus={{
										borderColor: "var(--accent-color)",
										scale: 1.02,
									}}
								/>
								{errors.date && (
									<div className="field-error sub-error">
										{errors.date}
									</div>
								)}
							</div>
							<div>
								<motion.input
									type="time"
									className={`input-box input-box-sub${
										errors.time ? " error" : ""
									}`}
									value={time}
									onChange={(e) => {
										setTime(e.target.value);
										if (errors.time)
											setErrors({ ...errors, time: "" });
									}}
									whileFocus={{
										borderColor: "var(--accent-color)",
										scale: 1.02,
									}}
								/>
								{errors.time && (
									<div className="field-error sub-error">
										{errors.time}
									</div>
								)}
							</div>
						</motion.div>

						{/* Submit */}
						<motion.div
							className="book-now-btn2"
							whileHover={{
								backgroundColor: "var(--accent-color-dark)",
								transform: "translateX(5px)",
							}}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.2 }}
							onClick={handleBooking}
						>
							Book Now{" "}
							<span className="arrow-right">&#8594;</span>
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div
					className="right-book-section"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.7 }}
				>
					<motion.img
						className="right-image"
						src="book.png"
						alt="Booking illustration"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default BookSection;
