'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(50)].map((_, i) => {
          const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
          const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * width, 
                y: Math.random() * height 
              }}
              animate={{ 
                y: [null, Math.random() * height],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Faith Journey Deserves<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              More Than Forgotten Prayers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#EDEDED] mb-12 max-w-3xl mx-auto">
            Capture your spiritual transformation through scripture-powered journaling, 
            AI biblical insights, and authentic Christian community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-[#1F1B58] hover:bg-[#2D2670] text-white px-8 py-6 text-lg">
              📱 Download on iOS
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              ▶️ Watch 60-Second Demo
            </Button>
          </div>

          {/* App Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1F1B58] to-[#0B132B] rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="text-[#EDEDED] text-lg">
                📱 App Screenshot Placeholder - Add your Chosen Daily interface screenshot here
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
