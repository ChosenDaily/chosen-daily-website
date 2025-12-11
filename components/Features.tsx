'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Brain, Clock, Users, Home, Download } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Scripture-Powered Journaling",
    description: "Journal with photos, voice notes, and overlay Bible verses for deeper reflection and spiritual connection."
  },
  {
    icon: Brain,
    title: "AI Biblical Mentor",
    description: "Get scripture suggestions, historical context, and prayer prompts from our biblically sound AI companion."
  },
  {
    icon: Clock,
    title: "Timed Reflections",
    description: "Morning, midday, and evening prompts to stay connected with God throughout your entire day."
  },
  {
    icon: Users,
    title: "Prayer Circles & Groups",
    description: "Join or create communities to share testimonies, pray together, and grow in authentic fellowship."
  },
  {
    icon: Home,
    title: "Multi-Generational Design",
    description: "Intuitive interface for all ages—from children discovering faith to grandparents deepening theirs."
  },
  {
    icon: Download,
    title: "Offline-First Experience",
    description: "Access your journal and scriptures anywhere, anytime. Your spiritual growth never stops."
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock the Full Picture of Your Faith
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to grow spiritually, all in one powerful app
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
