/* Animated HomePage Component */
import { motion } from "framer-motion";
import "./style/HeadSection.css";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
			when: "beforeChildren",
		},
	},
	exit: {
		opacity: 0,
		transition: { staggerChildren: 0.1, when: "afterChildren" },
	},
};

const NAV_LINKS = ["home", "about", "services", "doctor", "location"] as const;

const ALL_SECTIONS = [...NAV_LINKS, "book"] as const;
type SectionID = (typeof ALL_SECTIONS)[number];

const scrollToSection = (id: SectionID) => {
	const el = document.getElementById(id);
	if (el)
		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 100, damping: 10 },
	},
	exit: { y: -20, opacity: 0 },
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8 } },
	exit: { opacity: 0 },
};

const HeadSection = () => {
	return (
		<motion.div
			id="home"
			className="head-section"
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={containerVariants}
		>
			<motion.div className="head-section-container">
				<motion.div
					className="section-header"
					variants={containerVariants}
				>
					<motion.div className="hero-text" variants={itemVariants}>
						Exceptional
					</motion.div>
					<motion.div
						className="timing-details"
						variants={itemVariants}
					>
						<div className="date">July 10, 2023</div>
						<div className="time-details-text">
							\\ We're Open Clinic
						</div>
						<div className="timing">8 AM - 3 PM</div>
					</motion.div>
				</motion.div>

				<motion.div className="hero-text" variants={itemVariants}>
					<span className="accent-color">Dental</span> Care
				</motion.div>
				<motion.div className="description" variants={itemVariants}>
					With our team of experienced dentists and state-of-the-art
					technology, we deliver exceptional dental care to our
					patients.
				</motion.div>
				<motion.div
					className="book-now-btn"
					variants={itemVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => scrollToSection("book")}
				>
					Book Now <span className="arrow-right">&#8594;</span>
				</motion.div>

				<motion.div
					className="section-footer"
					variants={containerVariants}
				>
					<motion.div className="stat" variants={itemVariants}>
						<div className="stat-number">13</div>
						<div className="stat-text">
							Achieve your dream smile with the range of our
							services.
						</div>
					</motion.div>
					<motion.div
						className="down-btn"
						variants={itemVariants}
						animate={{
							y: [0, 10, 0],
						}}
						transition={{
							repeat: Infinity,
							duration: 2,
							ease: "easeInOut",
						}}
						onClick={() => scrollToSection("about")}
					>
						<img src="down.svg" alt="Scroll down" />
					</motion.div>
					<motion.div className="stat" variants={itemVariants}>
						<div className="stat-number">
							852<span className="accent-color">+</span>
						</div>
						<div className="stat-text">
							Transforming Healthcare with Telemedicine Connect.
						</div>
					</motion.div>
				</motion.div>
				<motion.div variants={fadeInVariants}>
					<motion.img
						className="bg-image-teeth"
						src="/teeth.png"
						alt="Teeth background"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 1 }}
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default HeadSection;
