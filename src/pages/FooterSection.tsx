import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollVelocity from "./components/ScrollVelocity";
import "./style/FooterSection.css";

const FooterSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Scroll-based animations
	const footerY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
	const lineScale = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

	return (
		<motion.div
			id="location"
			className="footer-section"
			ref={ref}
			style={{
				opacity,
				scale,
				y: footerY,
			}}
		>
			<div className="footer-section-container">
				<ScrollVelocity
					texts={[
						"Confident Smiles ✦ Beautiful Smiles ✦",
						"Dental Toothless ✦ All Hail Rameez ✦",
					]}
					velocity={100}
					className="custom-scroll-text"
				/>
			</div>

			<motion.div
				className="brand-info"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ staggerChildren: 0.1 }}
			>
				<motion.div
					className="info-box info-box-flex2"
					initial={{ y: 20 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.div className="brand" whileHover={{ scale: 1.02 }}>
						<motion.img
							className="brand-logo"
							src="logo.png"
							alt="Toothless Logo"
							whileHover={{ rotate: [0, 10, -10, 0] }}
							transition={{ duration: 0.5 }}
						/>
						<div className="brand-text">Toothless</div>
					</motion.div>
					<motion.div
						className="brand-description"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Provident ullam ea, quod eum explicabo deleniti
						excepturi unde atque quia recusandae sapiente optio sunt
						labore. Asperiores.
					</motion.div>
				</motion.div>

				<motion.div
					className="info-box"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<div className="info-title">PHONE NUMBER</div>
					<motion.div
						className="info-content"
						whileHover={{ x: 5, color: "var(--accent-color)" }}
					>
						+91 989898 2345
					</motion.div>
				</motion.div>

				<motion.div
					className="info-box"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<div className="info-title">EMAIL</div>
					<motion.div
						className="info-content"
						whileHover={{ x: 5, color: "var(--accent-color)" }}
					>
						info@dentaltoothless.co
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.div
				className="horizontal-line"
				style={{ scaleX: lineScale }}
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			/>

			<motion.div
				className="important-details"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ staggerChildren: 0.1 }}
			>
				<motion.div
					className="details-list details-list-flex2"
					initial={{ y: 20 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.div
						className="details-list-item"
						whileHover={{ x: 5 }}
					>
						CLINIC HOURS
					</motion.div>
					{[
						"Monday - Friday: 8:00 AM - 3:00 PM",
						"Saturday: 8:00 AM - 1:00 PM",
						"Sunday: Closed",
					].map((item, index) => (
						<motion.div
							key={index}
							className="details-list-item"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.1 * index }}
						>
							{item.split(":").map((part, i) =>
								i === 0 ? (
									part
								) : (
									<span
										key={i}
										className="details-list-item-span"
									>
										{part}
									</span>
								)
							)}
						</motion.div>
					))}
					<motion.div
						className="copywrite-text"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						Copyright Ⓒ 2025 Dental Toothless. All rights reserved.
					</motion.div>
				</motion.div>

				<motion.div
					className="vertical-line"
					initial={{ scaleY: 0 }}
					whileInView={{ scaleY: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				/>

				{[
					["ABOUT US", "OUR SERVICES", "OUR CLINICS", "DENTISTS"],
					[
						"LOCATION",
						"CAREER",
						"PRIVACY POLICY",
						"TERMS OF SERVICE",
					],
					["INSTAGRAM", "TWITTER", "THREADS", "TIKTOK"],
				].map((group, groupIndex) => (
					<motion.div
						key={groupIndex}
						className="details-list"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 * groupIndex }}
					>
						{group.map((item, itemIndex) => (
							<motion.div
								key={itemIndex}
								className="details-list-item"
								whileHover={{
									x: 5,
									color: "var(--accent-color)",
								}}
								transition={{ duration: 0.2 }}
							>
								{item}
							</motion.div>
						))}
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className="horizontal-line"
				style={{ scaleX: lineScale }}
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			/>

			<motion.div
				className="title"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
			>
				DENTAL TOOTHLESS
			</motion.div>
		</motion.div>
	);
};

export default FooterSection;
