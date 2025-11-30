'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Sparkles, Clock, Users, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Scripture-Powered Journaling",
    description: "Capture your thoughts with multimedia entries. Photos, voice notes, and verses—all in one sacred space.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "AI Biblical Mentor",
    description: "Receive context-rich scripture suggestions and theological insights powered by centuries of wisdom.",
    gradient: "from-pink-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Timed Reflections",
    description: "Morning Seek, Midday Pause, Evening Wind-Down. Build spiritual rhythms that transform your day.",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: Users,
    title: "Prayer Circles",
    description: "Join intimate groups, share testimonies, and lift each other up. Faith grows best in community.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Heart,
    title: "Multi-Generational",
    description: "From teens to theologians—intuitive design meets profound depth. One app, every generation.",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Offline-First",
    description: "Journal anywhere, anytime. Your spiritual growth doesn't require WiFi.",
    gradient: "from-blue-500 to-purple-500"
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/90">Features</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Everything You Need</span>
          <br />
          <span className="gradient-text">To Grow Spiritually</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/60 max-w-2xl mx-auto"
        >
          Powerful tools designed for authentic transformation
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-20"
      >
        <p className="text-white/50 text-lg mb-4">
          And so much more...
        </p>
        <div className="inline-flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ 
                animation: `pulse 2s ease-in-out infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
