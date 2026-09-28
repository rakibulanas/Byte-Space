import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import CoursesSection from "./components/CoursesSection";
import LearningPaths from "./components/LearningPaths";
import GrowthSection from "./components/GrowthSection";
import CreatorCta from "./components/CreatorCta";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<LogoStrip />
			<CoursesSection />
			<LearningPaths />
			<GrowthSection />
			<CreatorCta />
			<Testimonials />
			<Footer />
		</div>
	);
}
