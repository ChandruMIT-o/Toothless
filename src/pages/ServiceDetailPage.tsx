import { useParams, useNavigate } from "react-router-dom";
import ServicePage from "./ServicePage";
import { services } from "./ServicesData";

const ServiceDetailPage = () => {
	const { slug } = useParams();
	const navigate = useNavigate();

	const service = services.find((s) => s.slug === slug);

	if (!service) {
		return <div>Service not found</div>;
	}

	return (
		<ServicePage
			title={service.title}
			description={service.description}
			imageSrc={service.imageSrc}
			includedItems={service.includedItems}
			faqs={service.faqs}
			onBack={() => navigate("/")}
		/>
	);
};

export default ServiceDetailPage;
