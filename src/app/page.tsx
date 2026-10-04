import Navbar from "./navbar/page";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CoursesSection from "./components/CoursesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ResultsSection from "./components/ResultsSection";
import FacultySection from "./components/FacultySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <WhyChooseUs />
      <ResultsSection />
      <FacultySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
