import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import CoursesSection from "./components/CoursesSection";
import CreatorCta from "./components/CreatorCta";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<LogoStrip />
			<CoursesSection />
			<CreatorCta />
			<Footer />
		</div>
	);
}
