'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B132B]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-[#EDEDED] hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-[#EDEDED] hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-[#EDEDED] hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image 
              src="/images/Chosen_Daily_App_Logo.svg" 
              alt="Chosen Daily" 
              width={60} 
              height={60}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#testimonials" className="text-[#EDEDED] hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-[#EDEDED] hover:text-white transition-colors">
              FAQ
            </a>
            <Button className="bg-[#1F1B58] hover:bg-[#2D2670] text-white">
              Sign Up / Login
            </Button>
          </div>

          {/* Desktop Sign Up Button (Mobile) */}
          <div className="lg:hidden">
            <Button 
              className="bg-[#1F1B58] hover:bg-[#2D2670] text-white text-sm px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#EDEDED] hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
