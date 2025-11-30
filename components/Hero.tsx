'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="particles" />
      
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B132B]/50 to-[#0B132B] z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 animate-pulse" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/90">
            Join 50,000+ believers transforming their faith
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
        >
          <span className="text-white block mb-4">Your Faith</span>
          <span className="gradient-text block">Reimagined</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Experience scripture-powered journaling, AI-guided insights,
          and authentic community—all in one beautiful app
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            variant="default"
            className="text-lg px-12 py-7 h-auto group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Free
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-12 py-7 h-auto group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-4 md:p-8 shadow-2xl shadow-purple-500/20">
            <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
              
              <div className="relative z-10 text-center p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-strong mb-4">
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-white/50 text-lg font-medium">
                  App Screenshot Preview
                </p>
                <p className="text-white/30 text-sm mt-2">
                  Replace with actual app interface
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute -left-4 top-1/4 glass px-6 py-4 rounded-2xl hidden lg:block"
          >
            <div className="text-3xl font-bold gradient-text">4.9★</div>
            <div className="text-sm text-white/60">App Rating</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute -right-4 bottom-1/4 glass px-6 py-4 rounded-2xl hidden lg:block"
          >
            <div className="text-3xl font-bold gradient-text">1M+</div>
            <div className="text-sm text-white/60">Prayers Journaled</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
