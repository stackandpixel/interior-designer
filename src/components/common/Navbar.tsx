import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studioConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Inspiration', path: '/inspiration' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#ECE5DC]'
            : 'bg-[#FDFBF7]/80 backdrop-blur-xs border-b border-[#ECE5DC]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-[#1E1A17] whitespace-nowrap shrink-0 hover:text-[#4A3B32] transition-colors"
          >
            {STUDIO_CONFIG.brandName}
          </Link>

          {/* Zone 2: 4-6 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3B32]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#1E1A17] font-semibold'
                      : 'text-[#6B625B] hover:text-[#1E1A17]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A3B32] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#FDFBF7] bg-[#2C2724] hover:bg-[#433B37] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2C2724] hover:text-black focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-20 bg-[#FDFBF7] flex flex-col justify-between px-6 pb-8 border-b border-[#ECE5DC] animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 pt-6">
            <div className="text-xs uppercase tracking-widest text-[#8C7A6B] font-medium pb-2 border-b border-[#ECE5DC]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-serif font-medium text-[#2C2724] py-1.5 hover:text-[#A75D43] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-[#ECE5DC] flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full py-3 text-center text-xs uppercase tracking-widest font-semibold text-[#FDFBF7] bg-[#2C2724] hover:bg-black rounded-sm transition-colors"
            >
              Book a Consultation
            </Link>
            <p className="text-center text-xs text-[#8C7A6B]">
              Baner, Pune · Maharashtra
            </p>
          </div>
        </div>
      )}
    </>
  );
};
