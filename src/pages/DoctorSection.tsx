import { useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SocialMedia from "./components/SocialMedia";
import "./style/DoctorSection.css";

interface Doctor {
	id: number;
	name: string;
	image: string;
}

const DoctorSection = () => {
	const doctors: Doctor[] = [
		{ id: 1, name: "Dr. Rameez Akther", image: "doctor1.png" },
		{ id: 2, name: "Dr. Sarah Johnson", image: "doctor2.png" },
		{ id: 3, name: "Dr. Michael Chen", image: "doctor3.png" },
		{ id: 4, name: "Dr. Emily Wilson", image: "doctor4.png" },
		{ id: 5, name: "Dr. Rameez Akther", image: "doctor1.png" },
		{ id: 6, name: "Dr. Sarah Johnson", image: "doctor2.png" },
		{ id: 7, name: "Dr. Michael Chen", image: "doctor3.png" },
		{ id: 8, name: "Dr. Emily Wilson", image: "doctor4.png" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCount] = useState(4);

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev >= doctors.length - visibleCount ? 0 : prev + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? doctors.length - visibleCount : prev - 1
		);
	};

	const isSelected = (index: number) => index === currentIndex;

	// Scroll animation
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	const controls = useAnimation();

	if (isInView) {
		controls.start("visible");
	}

	return (
		<motion.div
			ref={sectionRef}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.8, ease: "easeOut" },
				},
			}}
			id="doctor"
			className="doctor-section"
		>
			<div className="doctor-section-container">
				<motion.div
					className="doctor-header"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="doctor-section-hero-text">
						Meet The Dentists
					</div>
					<div className="carousal-control-btns">
						<button className="left-btn" onClick={prevSlide}>
							<img src="left-arrow.svg" alt="Previous" />
						</button>
						<button className="right-btn" onClick={nextSlide}>
							<img src="right-arrow.svg" alt="Next" />
						</button>
					</div>
				</motion.div>

				<div className="doctor-carousel-container">
					<motion.div
						className="doctor-carousel"
						style={{
							transform: `translateX(-${
								currentIndex * (80 / visibleCount)
							}%)`,
						}}
					>
						{doctors.map((doctor, index) => (
							<motion.div
								key={doctor.id}
								className={`doctor-box ${
									isSelected(index)
										? ""
										: "doctor-box-unselected"
								}`}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									transition: {
										duration: 0.5,
										delay: index * 0.1,
									},
								}}
								viewport={{ once: true }}
							>
								{isSelected(index) && (
									<>
										<motion.div
											className="doctor-name"
											initial={{ x: -20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ delay: 0.3 }}
										>
											{doctor.name}
										</motion.div>
										<motion.div
											className="social-btns"
											initial={{ y: 10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.4 }}
										>
											<SocialMedia />
										</motion.div>
									</>
								)}
								<motion.img
									className="doctor-img"
									src={doctor.image}
									alt={doctor.name}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4 }}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default DoctorSection;
