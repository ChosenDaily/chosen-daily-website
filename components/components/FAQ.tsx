'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "Is this just another Bible app?",
    answer: "No! While we include comprehensive Bible tools, Chosen Daily is a complete spiritual ecosystem. Think of it as your personal journal + AI mentor + prayer community + scripture library—all working together to transform your faith journey."
  },
  {
    question: "How does the AI work? Is it biblically sound?",
    answer: "Our AI is trained on centuries of orthodox Christian theology and biblical scholarship. Every suggestion is contextually relevant and theologically verified. It's like having a seminary library in your pocket—helping you discover relevant passages without replacing the Holy Spirit's guidance."
  },
  {
    question: "Can I use this without internet?",
    answer: "Absolutely! Journal entries, Bible reading, saved reflections, and your prayer lists work 100% offline. When you reconnect, everything syncs automatically. Your spiritual growth doesn't need WiFi."
  },
  {
    question: "What about my data privacy?",
    answer: "Your journal is sacred to us. We use bank-level encryption, never sell your data, and you can export or delete everything anytime. GDPR and CCPA compliant. Your spiritual journey stays between you and God."
  },
  {
    question: "How do I cancel if needed?",
    answer: "Cancel anytime with one click in settings—no questions asked, no fees, no hassle. Your free tier access continues forever. We're building for transformation, not trapping you in subscriptions."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">FAQ</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Questions?</span>
            <br />
            <span className="text-white">We've Got Answers</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
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