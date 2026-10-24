import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import StackOverview from './components/StackOverview';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import TechDetails from './components/TechDetails';
import Footer from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <HeroSection scrollY={scrollY} />
      <StackOverview />
      <ArchitectureDiagram />
      <TechDetails />
      <Footer />
    </div>
  );
}
