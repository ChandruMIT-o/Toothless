import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/AboutSection.css";

const AboutSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Animation values based on scroll progress
	const leftSectionY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
	const missionBoxScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
	const subBoxOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
	const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
	const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);

	return (
		<div id="about" className="about-section" ref={ref}>
			<div className="about-section-container">
				<motion.div
					className="left-about-section"
					style={{ y: leftSectionY }}
				>
					<div className="left-container">
						<motion.div
							className="about-section-hero-text"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
						>
							About
						</motion.div>
						<div className="about-section-sub-container">
							<motion.div
								className="mission-box"
								style={{ scale: missionBoxScale }}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								<motion.div
									className="mission-title"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.4 }}
								>
									Our Mission
								</motion.div>
								<motion.div
									className="mission-text"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5 }}
								>
									Help you achieve a{" "}
									<span className="accent-color">
										healthy, confident smile
									</span>{" "}
									that lasts a lifetime.
								</motion.div>
								<motion.div
									className="mission-author"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.7, duration: 0.5 }}
								>
									- CEO Rameez Akther
								</motion.div>
							</motion.div>
							<motion.div
								className="about-section-sub-boxes"
								style={{ opacity: subBoxOpacity }}
							>
								<motion.div
									className="sub-box"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.6 }}
									whileHover={{
										y: -5,
										boxShadow:
											"0 10px 20px rgba(0,0,0,0.1)",
									}}
								>
									<img
										className="top-right"
										src="top_right.svg"
										alt="Decoration"
									/>
									<div className="sub-box-text">
										Skilled Dentists
									</div>
								</motion.div>
								<motion.div
									className="sub-box"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.7 }}
									whileHover={{
										y: -5,
										boxShadow:
											"0 10px 20px rgba(0,0,0,0.1)",
									}}
								>
									<img
										className="top-right"
										src="top_right.svg"
										alt="Decoration"
									/>
									<div className="sub-box-text">
										Comfortable Environment
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="right-about-section"
					style={{
						rotate: imageRotate,
						scale: imageScale,
					}}
				>
					<motion.img
						className="gallery-image"
						src="about.png"
						alt="About our clinic"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.8 }}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutSection;
