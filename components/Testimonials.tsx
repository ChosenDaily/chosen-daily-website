'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "127 days of consistent journaling. My marriage is healed, my anxiety is gone, and I finally understand what it means to walk with God.",
    author: "Sarah M.",
    location: "Texas, USA",
    avatar: "SM",
    rating: 5
  },
  {
    quote: "The AI insights are phenomenal. Finally understand Revelation. As a pastor, I'm recommending this to my entire congregation.",
    author: "Pastor John K.",
    location: "Lagos, Nigeria",
    avatar: "JK",
    rating: 5
  },
  {
    quote: "My 14-year-old daughter asks to journal before bed now. This app bridges generations in our family's faith journey.",
    author: "Maria L.",
    location: "California, USA",
    avatar: "ML",
    rating: 5
  }
];

const stats = [
  { number: "4.9★", label: "App Store Rating" },
  { number: "50K+", label: "Active Users" },
  { number: "1M+", label: "Prayers Journaled" }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">Testimonials</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Lives Being</span>
            <br />
            <span className="gradient-text">Transformed</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-white/80 text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/50 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
