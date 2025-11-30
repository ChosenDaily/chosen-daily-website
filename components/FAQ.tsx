'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this just another Bible app?",
    answer: "No! While we include Bible reading tools, Chosen Daily is a comprehensive spiritual growth platform. Think of it as your personal spiritual journal + AI mentor + Christian community hub—all centered around scripture."
  },
  {
    question: "How does the AI work? Is it biblically sound?",
    answer: "Our AI is trained on centuries of biblical scholarship and only suggests scriptures with proper context. Every recommendation is verified against orthodox Christian theology. It's like having a seminary library in your pocket—never replacing the Holy Spirit, just helping you discover relevant passages."
  },
  {
    question: "Can I use this without internet?",
    answer: "Absolutely! Journal entries, Bible reading, and your saved reflections work 100% offline. When you reconnect, everything syncs automatically. Your spiritual growth doesn't need WiFi."
  },
  {
    question: "What about my data privacy?",
    answer: "Your journal is sacred. We use bank-level encryption, never sell your data, and you can export or delete everything anytime. GDPR and CCPA compliant. Your spiritual journey stays between you and God."
  },
  {
    question: "How do I cancel if needed?",
    answer: "Cancel anytime with one click—no questions asked, no fees. Your free tier access continues forever. We're building for transformation, not trapping you in subscriptions."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#EDEDED]">
            Everything you need to know about Chosen Daily
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#EDEDED]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
