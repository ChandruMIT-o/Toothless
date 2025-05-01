import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DoctorSection from "./pages/DoctorSection";
import ServiceSection from "./pages/ServiceSection";
import HeadSection from "./pages/HeadSection";
import AboutSection from "./pages/AboutSection";
import BookSection from "./pages/BookSection";
import FooterSection from "./pages/FooterSection";
import NavSection from "./pages/NavSection";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import UserPage from "./pages/UserPage";

// A Layout for pages that have common sections (Nav, Footer, etc.)
const MainLayout = () => (
	<div className="bodylike">
		<NavSection />
		<HeadSection />
		<AboutSection />
		<ServiceSection />
		<DoctorSection />
		<BookSection />
		<FooterSection />
	</div>
);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes for pages with the common layout */}
				<Route path="/" element={<MainLayout />} />

				{/* Separate routes for sign-in and sign-up pages */}
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/services/:slug" element={<ServiceDetailPage />} />
				<Route path="/user/:username" element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
