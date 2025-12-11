'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this just another Bible app?",
    answer: "No—Chosen Daily is a journaling companion that weaves AI insights and authentic community into your walk with God. While we include scripture tools, we're focused on helping you reflect, connect, and grow through daily journaling and prayer circles. It's scripture-centered, but so much more."
  },
  {
    question: "How does the AI work? Is it biblically sound?",
    answer: "Our AI is trained on trusted translations (ESV/NIV) and includes theological safeguards to ensure biblical accuracy. It provides context, suggests relevant passages, and offers prayer prompts—but we always encourage you to cross-reference with your own Bible and seek the Holy Spirit's guidance. Think of it as a study companion, not a replacement for Scripture."
  },
  {
    question: "Can I use this without internet?",
    answer: "Yes! Chosen Daily is fully offline-capable. You can journal, read saved scriptures, and access your reflections anywhere. When you reconnect to the internet, everything syncs seamlessly across your devices."
  },
  {
    question: "What about my data privacy?",
    answer: "Your spiritual journey is sacred to us. All data is encrypted, user-owned, and GDPR/CCPA compliant. Your prayers and reflections remain completely private unless you choose to share them in prayer circles. We never sell your data or share it with third parties."
  },
  {
    question: "How do I cancel if needed?",
    answer: "You can cancel anytime with one click in your account settings—no questions asked, no hassle. If you're on a paid plan and cancel, you'll retain access until the end of your billing period. Your journey with God is yours to navigate."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to know about Chosen Daily
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-gray-50 text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
