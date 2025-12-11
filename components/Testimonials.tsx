'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Chosen Daily has reignited my daily walk—scripture feels alive again.",
    author: "Sarah L.",
    role: "Youth Pastor",
    location: "Austin, TX"
  },
  {
    quote: "The AI insights are biblically grounded and transformative for our family devotions.",
    author: "Mark T.",
    role: "Father of 4",
    location: "Nashville, TN"
  },
  {
    quote: "From rushed prayers to profound circles—it's changed how we connect in community.",
    author: "Emily R.",
    role: "Small Group Leader",
    location: "Portland, OR"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Backed by Pastors, Loved by Believers
          </h2>
          <p className="text-xl text-white/70">
            Join thousands growing deeper in their faith journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg">
                <Quote className="w-10 h-10 text-[#F59E0B] mb-4" />
                
                <p className="text-gray-800 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
