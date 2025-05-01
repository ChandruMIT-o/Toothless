import "./style/ServicePage.css";
import { useState } from "react";

type FAQ = {
	question: string;
	answer: string;
};

type ServicePageProps = {
	title: string;
	description: string;
	imageSrc: string;
	includedItems: string[];
	faqs: FAQ[];
	onBack?: () => void;
};

const Accordion = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="accordion-item" onClick={() => setIsOpen(!isOpen)}>
			<div className="accordion-question">
				{question}
				<span className="accordion-toggle">{isOpen ? "−" : "+"}</span>
			</div>
			{isOpen && <div className="accordion-answer">{answer}</div>}
		</div>
	);
};

const ServicePage = ({
	title,
	description,
	imageSrc,
	includedItems,
	faqs,
	onBack,
}: ServicePageProps) => {
	return (
		<div className="servicep-section">
			<div className="servicep-section-container">
				<div className="left-servicep-section">
					<div className="sp-left-container">
						<div className="back-btn-sp" onClick={onBack}>
							Back
						</div>
						<div className="servicep-section-hero-text">
							{title}
						</div>
						<div className="sp-mission-box">
							<div className="serv-desc-text">
								<span className="accent-color">
									Your smile matters.
								</span>{" "}
								{description}
							</div>
						</div>
						<div className="faq-title">What's Included</div>
						<div className="included-list">
							{includedItems.map((item, idx) => (
								<div className="sp-chip" key={idx}>
									<div className="sp-sub-chip">{item}</div>
								</div>
							))}
						</div>
						{faqs.length > 0 && (
							<div className="faq-section">
								<div className="faq-title">
									Frequently Asked Questions
								</div>
								{faqs.map((faq, index) => (
									<Accordion
										key={index}
										question={faq.question}
										answer={faq.answer}
									/>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="right-servicep-section">
					<img
						className="gallery-image"
						src={imageSrc}
						alt={`${title} illustration`}
					/>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;
