'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for exploring your faith journey",
    features: [
      "Daily devotionals",
      "10 journal entries/month",
      "Community access",
      "Basic Bible reading",
      "Mobile app access"
    ],
    cta: "Get Started",
    popular: false,
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "month",
    description: "For serious spiritual growth",
    features: [
      "Everything in Starter",
      "Unlimited journaling",
      "AI biblical insights",
      "Voice & photo uploads",
      "Advanced Bible tools",
      "Priority support",
      "Offline access"
    ],
    cta: "Start 7-Day Trial",
    popular: true,
    icon: Crown,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Family Dynasty",
    price: "$49.99",
    period: "year",
    description: "Build a multi-generational legacy",
    features: [
      "Everything in Premium",
      "5 family member seats",
      "Shared prayer board",
      "Legacy archive (100 years)",
      "Family analytics",
      "Dedicated support",
      "Early feature access"
    ],
    cta: "Save 50% Now",
    popular: false,
    icon: Zap,
    gradient: "from-orange-500 to-red-500"
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.1),transparent_50%)]" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6"
        >
          <Crown className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/90">Pricing</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Choose Your</span>
          <br />
          <span className="gradient-text">Spiritual Growth Plan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/60 max-w-2xl mx-auto"
        >
          Transparent pricing. Cancel anytime. Early adopters get lifetime 40% discount.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${plan.popular ? 'md:scale-110 md:-mt-8' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`bg-gradient-to-r ${plan.gradient} px-6 py-2 rounded-full shadow-lg`}>
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className={`h-full glass-strong rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden ${
                plan.popular ? 'border-2 border-purple-500/50' : ''
              }`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6 relative z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan name */}
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                  {plan.name}
                </h3>
                <p className="text-white/50 text-sm mb-6 relative z-10">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-white/50">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className="w-full relative z-10"
                >
                  {plan.cta}
                </Button>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${plan.gradient} rounded-full blur-3xl opacity-20`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Launch Special */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16 relative z-10"
      >
        <div className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-full">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <p className="text-white font-semibold">
            🎁 Launch Special: Early adopters get lifetime 40% discount — expires Dec 31, 2025
          </p>
        </div>
      </motion.div>
    </section>
  );
}