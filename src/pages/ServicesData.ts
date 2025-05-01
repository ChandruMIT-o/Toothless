// servicesData.ts
export type ServiceData = {
	slug: string;
	title: string;
	description: string;
	imageSrc: string;
	includedItems: string[];
	faqs: { question: string; answer: string }[];
};

export const services: ServiceData[] = [
	{
		slug: "basic-dental-care",
		title: "Basic Dental Care",
		description:
			"Our Basic Dental Plan provides affordable, preventive dental care to help you maintain optimal oral health. Services include routine checkups, cleanings, and treatments to prevent dental issues before they become serious. This plan is ideal for individuals and families seeking cost-effective dental care.",
		imageSrc: "/basic_care.jpg",
		includedItems: [
			"Routine Checkups",
			"Professional Cleanings",
			"X-rays",
			"Basic Fillings",
			"Tooth Extractions",
			"Emergency Consultations",
		],
		faqs: [
			{
				question: "What does basic dental care include?",
				answer: "Basic care includes regular exams, cleanings, X-rays, and preventive treatments like fluoride and sealants.",
			},
			{
				question: "How often should I visit the dentist?",
				answer: "Every 6 months for routine checkups and cleanings.",
			},
			{
				question: "Are emergency visits covered?",
				answer: "Yes, emergency consultations are included in this plan.",
			},
		],
	},
	{
		slug: "aesthetic-care",
		title: "Aesthetic Care",
		description:
			"Aesthetic dental treatments are designed to improve the appearance of your teeth and smile. Our services range from teeth whitening to full smile makeovers using the latest cosmetic dentistry techniques.",
		imageSrc: "/aesthetics.jpg",
		includedItems: [
			"Teeth Whitening",
			"Porcelain Veneers",
			"Smile Design",
			"Enamel Shaping",
			"Tooth-Colored Fillings",
			"Gum Contouring",
		],
		faqs: [
			{
				question: "Is teeth whitening safe?",
				answer: "Yes, our professional whitening treatments are safe, effective, and supervised by dental experts.",
			},
			{
				question: "What are veneers?",
				answer: "Veneers are thin porcelain shells that cover the front of your teeth to enhance their appearance.",
			},
		],
	},
	{
		slug: "orthodonti",
		title: "Orthodonti",
		description:
			"Our orthodontic services correct misaligned teeth and jaws using modern braces and aligners. We offer customized treatments for children, teens, and adults to ensure a healthy, confident smile.",
		imageSrc: "/images/orthodonti.jpg",
		includedItems: [
			"Metal Braces",
			"Invisible Aligners",
			"Retainers",
			"Space Maintainers",
			"Orthodontic Evaluation",
			"Growth Monitoring",
		],
		faqs: [
			{
				question: "What age is best for orthodontic treatment?",
				answer: "Orthodontic treatment can begin as early as 7 years old, but adults can also benefit.",
			},
			{
				question: "How long do I have to wear braces?",
				answer: "Treatment typically lasts 18 to 24 months depending on the case.",
			},
		],
	},
	{
		slug: "prosthodonti",
		title: "Prosthodonti",
		description:
			"Prosthodontics focuses on restoring and replacing missing teeth to enhance oral function and aesthetics. We offer custom prosthetics such as crowns, bridges, and dentures.",
		imageSrc: "/images/prosthodonti.jpg",
		includedItems: [
			"Dental Crowns",
			"Dental Bridges",
			"Full & Partial Dentures",
			"Implant-Supported Prosthetics",
			"Smile Rehabilitation",
			"Bite Correction",
		],
		faqs: [
			{
				question: "How long do dentures last?",
				answer: "With proper care, dentures can last 5–10 years before needing replacement.",
			},
			{
				question: "What’s the difference between crowns and bridges?",
				answer: "Crowns cover damaged teeth; bridges replace one or more missing teeth using adjacent teeth for support.",
			},
		],
	},
	{
		slug: "dental-implant",
		title: "Dental Implant",
		description:
			"Dental implants offer a permanent solution for missing teeth. Our team uses high-quality implants that fuse naturally with your jawbone to restore your smile's look and function.",
		imageSrc: "/images/dental-implant.jpg",
		includedItems: [
			"Implant Consultation",
			"Single Tooth Implants",
			"Multiple Implants",
			"Implant Surgery",
			"Bone Grafting",
			"Implant-Supported Dentures",
		],
		faqs: [
			{
				question: "Are dental implants painful?",
				answer: "Most patients report minimal discomfort. Local anesthesia is used, and post-surgery care reduces pain.",
			},
			{
				question: "How long do implants last?",
				answer: "With good hygiene, dental implants can last 20 years or more.",
			},
		],
	},
	{
		slug: "pedodonti",
		title: "Pedodonti",
		description:
			"Pediatric dentistry ensures your child’s dental health is cared for from infancy through adolescence. We create a kid-friendly environment and offer preventive and corrective treatments.",
		imageSrc: "/images/pedodonti.jpg",
		includedItems: [
			"Fluoride Treatments",
			"Sealants",
			"Milk Tooth Extractions",
			"Space Maintainers",
			"Habit Counseling",
			"Emergency Dental Care for Kids",
		],
		faqs: [
			{
				question: "When should my child first see a dentist?",
				answer: "By their first birthday or within 6 months of the first tooth.",
			},
			{
				question: "What if my child is afraid of the dentist?",
				answer: "We use a gentle, friendly approach and kid-specific techniques to ease anxiety.",
			},
		],
	},
	{
		slug: "endodonti",
		title: "Endodonti",
		description:
			"Endodontic treatments save severely infected or damaged teeth by removing the pulp and sealing the root canals. Our modern techniques ensure comfort and long-term success.",
		imageSrc: "/images/endodonti.jpg",
		includedItems: [
			"Root Canal Diagnosis",
			"Single & Multi-Root Canals",
			"Post & Core Build-Up",
			"Re-treatment of Failed Canals",
			"Microscopic Endodontics",
			"Pain Management",
		],
		faqs: [
			{
				question: "Is a root canal painful?",
				answer: "Modern root canal treatments are virtually painless thanks to advanced anesthesia and techniques.",
			},
			{
				question: "How long does a root canal take?",
				answer: "Usually 1–2 appointments of 60–90 minutes each.",
			},
		],
	},
	{
		slug: "minor-surgery",
		title: "Minor Surgery",
		description:
			"We provide outpatient oral surgeries including extractions, biopsies, and cyst removals, all performed under local anesthesia with utmost care and hygiene.",
		imageSrc: "/images/minor-surgery.jpg",
		includedItems: [
			"Tooth Extractions",
			"Wisdom Tooth Surgery",
			"Biopsies",
			"Cyst Removal",
			"Frenectomy",
			"Soft Tissue Surgery",
		],
		faqs: [
			{
				question: "Do I need to be hospitalized for minor surgery?",
				answer: "No, all our minor oral surgeries are outpatient procedures done under local anesthesia.",
			},
			{
				question: "How long is recovery?",
				answer: "Most recover in 1–3 days, but it varies based on the procedure and personal healing.",
			},
		],
	},
];
