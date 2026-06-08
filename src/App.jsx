import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RealWorksGallery from './components/RealWorksGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-charcoal flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <RealWorksGallery />
        <WhyChooseUs />
        <Contact />
        <Footer />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
