'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: "Free Forever",
    price: "$0",
    period: "month",
    features: [
      "Daily devotionals",
      "10 journal entries/month",
      "Community access",
      "Basic Bible reading"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "month",
    features: [
      "Everything in Free +",
      "Unlimited journaling",
      "AI biblical insights",
      "Voice/photo uploads",
      "Advanced Bible tools"
    ],
    cta: "Start 7-Day Trial",
    popular: true
  },
  {
    name: "Family Dynasty",
    price: "$49.99",
    period: "year",
    features: [
      "Everything in Premium +",
      "5 family member seats",
      "Shared prayer board",
      "Legacy archive (100 years)",
      "Priority support"
    ],
    cta: "Save 50% Now",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Spiritual Growth Plan
          </h2>
          <p className="text-xl text-[#EDEDED] max-w-2xl mx-auto">
            Transparent pricing. Cancel anytime. Early adopters get lifetime 40% discount.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#1F1B58] to-[#2D2670] border-2 border-purple-400 scale-105' 
                  : 'bg-white/5 border-white/10'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-300 text-[#0B132B] px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-[#EDEDED]">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-[#EDEDED]">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-white text-[#1F1B58] hover:bg-gray-100' 
                        : 'bg-[#1F1B58] hover:bg-[#2D2670] text-white'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#EDEDED] mt-8">
          🎁 <strong>Launch Special:</strong> Early adopters get lifetime 40% discount — expires Dec 31, 2025
        </p>
      </div>
    </section>
  );
}
