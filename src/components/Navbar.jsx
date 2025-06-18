import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Backdrop blur overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'w-11/12 max-w-5xl' 
          : 'w-11/12 max-w-6xl'
      }`}>
        <div className={`relative backdrop-blur-2xl border border-white/10 rounded-3xl transition-all duration-500 ${
          scrolled 
            ? 'bg-white/20 shadow-2xl shadow-orange-500/5' 
            : 'bg-white/15 shadow-xl shadow-black/5'
        }`}>
          
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Logo with animated gradient */}
              <Link 
                to="/" 
                className="group relative text-2xl md:text-3xl font-bold transition-all duration-300 hover:scale-105"
              >
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Zyro House
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Creators', path: '#creators', isSection: true },
                  { name: 'Case Studies', path: '#case-studies', isSection: true },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <div key={item.name} className="relative group">
                    {item.isSection && location.pathname === '/' ? (
                      <button
                        onClick={() => scrollToSection(item.path.substring(1))}
                        className="relative px-4 py-2 text-gray-800 hover:text-orange-500 font-medium transition-all duration-300 rounded-2xl group overflow-hidden bg-transparent"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-red-100/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="relative px-4 py-2 text-gray-800 hover:text-orange-500 font-medium transition-all duration-300 rounded-2xl group overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-red-100/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Apply Now Button - External Link */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSenumKRyks7WfLLOffu6DiKnk_8VXkMj-gynFudjlzcRPI8Xg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative ml-4 group"
                >
                  {/* Glowing background effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse-slow" />
                  
                  {/* Main button */}
                  <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-orange-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-orange-500/40 border border-orange-400/20">
                    <span className="flex items-center gap-2">
                      <span className="relative">
                        Apply Now
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      </span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                  
                  {/* Animated ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-orange-400/0 group-hover:border-orange-400/50 transition-all duration-500 scale-110 group-hover:scale-125" />
                </a>
              </div>

              {/* Mobile Menu Button with morphing animation */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 text-gray-800 hover:text-orange-500 transition-colors duration-300 focus:outline-none"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                  </div>
                </div>
              </button>
            </div>

            {/* Mobile Menu with slide animation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-white/20 pt-4">
                <div className="flex flex-col space-y-3">
                  {[
                    { name: 'About', path: '/about' },
                    { name: 'Creators', path: '#creators', isSection: true },
                    { name: 'Case Studies', path: '#case-studies', isSection: true },
                    { name: 'Contact', path: '/contact' }
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      className="transform transition-all duration-300"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                      }}
                    >
                      {item.isSection && location.pathname === '/' ? (
                        <button
                          onClick={() => {
                            scrollToSection(item.path.substring(1));
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-gray-800 hover:text-orange-500 hover:bg-orange-50/20 font-medium transition-all duration-300 rounded-2xl bg-transparent"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className="block px-4 py-3 text-gray-800 hover:text-orange-500 hover:bg-orange-50/20 font-medium transition-all duration-300 rounded-2xl"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile Apply Button - External Link */}
                  <div className="mx-4 mt-4 relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-300" />
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSenumKRyks7WfLLOffu6DiKnk_8VXkMj-gynFudjlzcRPI8Xg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-5 rounded-2xl font-semibold text-center shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 transform hover:scale-105 border border-orange-400/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Apply Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}