'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Essentials",
    tagline: "Faith insights at our best price",
    price: "$4.99",
    period: "month",
    features: [
      "Core journaling with photos & voice",
      "Basic AI scripture prompts",
      "Offline access to journal",
      "Community prayer circles",
      "Multi-device sync"
    ]
  },
  {
    name: "Premium",
    tagline: "The most powerful devotion tool ever",
    price: "$9.99",
    period: "month",
    yearlyPrice: "$99",
    popular: true,
    features: [
      "Everything in Essentials",
      "Advanced AI Biblical Mentor",
      "Unlimited prayer groups",
      "Custom themes & layouts",
      "Priority support",
      "Historical context insights",
      "Family sharing (up to 5)"
    ]
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Spiritual Growth Plan
          </h2>
          <p className="text-xl text-white/70">
            Start free, upgrade anytime as your faith journey deepens
          </p>
        </motion.div>

        {/* Launch Special Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#F59E0B] text-white rounded-2xl p-6 mb-12 text-center"
        >
          <p className="text-lg font-semibold">
            🎁 Launch Special: Early adopters get lifetime 40% discount — expires Dec 31, 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`bg-white rounded-3xl p-8 h-full shadow-xl ${plan.popular ? 'ring-2 ring-[#F59E0B]' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.tagline}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                  {plan.yearlyPrice && (
                    <p className="text-sm text-gray-500 mt-2">
                      or {plan.yearlyPrice}/year (save $20)
                    </p>
                  )}
                </div>

                <Button 
                  className={`w-full mb-8 ${plan.popular ? 'bg-[#F59E0B] hover:bg-[#D97706]' : 'bg-gray-900 hover:bg-gray-800'} text-white py-6 text-lg`}
                >
                  Get Started
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
