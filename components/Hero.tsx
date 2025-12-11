'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, BookOpen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Unlock Your Spiritual Potential & Lifespan in Faith
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
              One journal, deeper connection to God
            </p>
            
            <p className="text-lg text-white/70 mb-8">
              Journal with Chosen Daily daily, transform your walk
            </p>

            {/* Metrics Banner */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold text-white">2x</p>
                    <p className="text-sm text-white/70">Deeper reflections with daily use</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold text-white">91%</p>
                    <p className="text-sm text-white/70">More scripture engagement weekly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold text-white">10%+</p>
                    <p className="text-sm text-white/70">Higher peace scores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-8 py-6 h-auto">
                Start Journaling Free
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Explore Memberships
              </Button>
            </div>
          </motion.div>

          {/* Right - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://via.placeholder.com/600x800/1F1B58/FFFFFF?text=Chosen+Daily+App" 
                alt="Chosen Daily App Screenshot"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
