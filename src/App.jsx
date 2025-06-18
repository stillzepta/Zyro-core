import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreatorCard from './components/CreatorCard';
import CaseStudyCard from './components/CaseStudyCard';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="*" element={<Home />} /> {/* Fallback to home */}
      </Routes>
    </Router>
  );
}
