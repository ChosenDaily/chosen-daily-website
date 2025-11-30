'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [10, 30]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        style={{ 
          opacity: navOpacity,
          backdropFilter: `blur(${navBlur}px)`,
        }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B132B]/80 shadow-2xl shadow-purple-500/10 border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Left Nav Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-10">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
              >
                Pricing
              </button>
            </div>

            {/* Center Logo */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="focus:outline-none"
              >
                <Image 
                  src="/logo.svg" 
                  alt="Chosen Daily" 
                  width={isScrolled ? 50 : 60} 
                  height={isScrolled ? 50 : 60}
                  className="transition-all duration-500 drop-shadow-2xl"
                />
              </button>
            </motion.div>

            {/* Right Nav Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-10">
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
              >
                FAQ
              </button>
              <Button 
                variant="default"
                size="sm"
                className="shadow-lg shadow-purple-500/30"
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-all"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div className="absolute inset-0 bg-[#0B132B]/95 backdrop-blur-2xl pt-24 px-6">
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white text-2xl font-semibold hover:text-purple-400 transition-all text-left py-3"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white text-2xl font-semibold hover:text-purple-400 transition-all text-left py-3"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white text-2xl font-semibold hover:text-purple-400 transition-all text-left py-3"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white text-2xl font-semibold hover:text-purple-400 transition-all text-left py-3"
            >
              FAQ
            </button>
            <Button 
              variant="default"
              size="lg"
              className="w-full mt-8"
            >
              Sign In
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}