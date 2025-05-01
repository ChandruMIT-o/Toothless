import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "./ServicesData";
import "./style/ServiceSection.css";

const ServiceSection = () => {
	const navigate = useNavigate();
	const ref = useRef(null);
	const [hoveredService, setHoveredService] = useState<string | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Scroll-based motion values
	const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
	const mainBoxY = useTransform(scrollYProgress, [0, 0.3], ["50px", "0px"]);
	const subBoxX = useTransform(scrollYProgress, [0.3, 0.6], ["50px", "0px"]);
	const bgBlur = useTransform(
		scrollYProgress,
		[0, 0.5],
		["blur(0px)", "blur(4px)"]
	);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
	const sectionRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);

	// Glow effect based on scroll
	const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.1]);
	const glowScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.2]);

	return (
		<motion.section
			id="services"
			className="service-section"
			ref={ref}
			style={{
				rotate: sectionRotate,
			}}
		>
			{/* Animated background layer */}
			<motion.div
				className="service-section-bg"
				style={{
					scale: bgScale,
					filter: bgBlur,
				}}
			/>

			{/* Glow effect */}
			<motion.div
				className="service-glow"
				style={{
					opacity: glowOpacity,
					scale: glowScale,
				}}
			/>

			<motion.div
				className="service-section-hero-text"
				style={{
					scale: titleScale,
					opacity: titleOpacity,
				}}
			>
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					Our Services
				</motion.span>
				<motion.div
					className="title-underline"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.8 }}
					style={{ originX: 0 }}
				/>
			</motion.div>

			<motion.div
				className="service-section-sub-container"
				style={{ y: mainBoxY }}
			>
				<div className="service-main-boxes">
					{services.slice(0, 2).map((service, index) => (
						<motion.div
							key={service.slug}
							className="service-main-box clickable"
							onClick={() =>
								navigate(`/services/${service.slug}`)
							}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								delay: index * 0.2,
								duration: 0.8,
								type: "spring",
								bounce: 0.4,
							}}
							whileHover={{
								y: -15,
								boxShadow:
									"0 25px 50px -12px rgba(0, 0, 0, 0.25)",
								transition: { duration: 0.4 },
							}}
							onHoverStart={() => setHoveredService(service.slug)}
							onHoverEnd={() => setHoveredService(null)}
						>
							<AnimatePresence>
								{hoveredService === service.slug && (
									<motion.div
										className="box-glow"
										initial={{ opacity: 0 }}
										animate={{ opacity: 0.3 }}
										exit={{ opacity: 0 }}
									/>
								)}
							</AnimatePresence>

							<motion.div
								className="main-box-title"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 + 0.3 }}
							>
								{service.title}
							</motion.div>

							<motion.div
								className="main-box-details"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.2 + 0.4,
									staggerChildren: 0.1,
								}}
							>
								{service.includedItems
									.slice(0, 3)
									.map((item, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{
												delay:
													index * 0.2 +
													0.4 +
													idx * 0.1,
												type: "spring",
												stiffness: 100,
											}}
										>
											<motion.span whileHover={{ x: 5 }}>
												+ {item}
											</motion.span>
										</motion.div>
									))}
							</motion.div>

							<motion.div
								className="main-box-arrow"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 + 0.7 }}
								whileHover={{ x: 10 }}
							>
								→
							</motion.div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="service-section-sub-boxes"
					style={{ x: subBoxX }}
				>
					{services.slice(2).map((service, index) => (
						<motion.div
							key={service.slug}
							className="service-box clickable"
							onClick={() =>
								navigate(`/services/${service.slug}`)
							}
							initial={{ opacity: 0, x: 50, rotate: 5 }}
							whileInView={{ opacity: 1, x: 0, rotate: 0 }}
							viewport={{ once: true }}
							transition={{
								delay: 0.4 + index * 0.1,
								type: "spring",
								stiffness: 100,
								damping: 10,
							}}
							whileHover={{
								y: -10,
								scale: 1.05,
								backgroundColor: "var(--accent-color-light)",
								boxShadow:
									"0 10px 25px -5px rgba(0, 0, 0, 0.1)",
								transition: { duration: 0.3 },
							}}
							onHoverStart={() => setHoveredService(service.slug)}
							onHoverEnd={() => setHoveredService(null)}
						>
							<AnimatePresence>
								{hoveredService === service.slug && (
									<motion.div
										className="box-glow-small"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 0.2, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
									/>
								)}
							</AnimatePresence>

							{service.title}
							<motion.span
								className="service-box-arrow"
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.6 + index * 0.1 }}
								whileHover={{ x: 10 }}
							>
								→
							</motion.span>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default ServiceSection;
