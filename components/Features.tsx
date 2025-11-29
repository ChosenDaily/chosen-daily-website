'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Scripture-Powered Journaling",
    description: "Capture your thoughts, attach photos/voice, overlay verses. Your spiritual diary meets divine wisdom.",
    icon: "📖"
  },
  {
    title: "AI Biblical Mentor",
    description: "Struggling with doubt? Our AI suggests relevant scriptures + historical context. Like having a pastor in your pocket.",
    icon: "🤖"
  },
  {
    title: "Timed Reflections",
    description: "Morning Seek, Midday Pause, Evening Wind-Down. Build discipline through rhythm.",
    icon: "⏰"
  },
  {
    title: "Prayer Circles & Groups",
    description: "Find your tribe. Share testimonies, lift each other up, grow together.",
    icon: "🙏"
  },
  {
    title: "Multi-Generational Design",
    description: "Intuitive for teens, deep enough for theologians. One app, every age.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Offline-First Experience",
    description: "Journal anywhere, anytime. Your spiritual growth doesn't require WiFi.",
    icon: "📱"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Grow Spiritually
          </h2>
          <p className="text-xl text-[#EDEDED] max-w-2xl mx-auto">
            Powerful features designed to make scripture-centered growth accessible to everyone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#EDEDED]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
