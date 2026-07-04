import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'Where is Mahadev Fitness located?',
    answer: 'We are located on the First Floor, RCC Roof, Warangal X Road, Jintal, Khammam, Telangana 507003. We have ample parking space available.'
  },
  {
    id: '2',
    question: 'Are there certified trainers available?',
    answer: 'Yes! All our trainers are certified professionals who specialize in different areas like weight loss, muscle building, and strength training. Personal training is also available.'
  },
  {
    id: '3',
    question: 'Is the gym fully air-conditioned?',
    answer: 'Absolutely. We maintain a fully air-conditioned environment to ensure you have a comfortable and energetic workout session regardless of the weather outside.'
  },
  {
    id: '4',
    question: 'Can beginners join?',
    answer: 'Yes, beginners are highly encouraged! Our friendly trainers will guide you through the basics, help you set up a routine, and ensure you use the equipment safely.'
  },
  {
    id: '5',
    question: 'What are the gym timings?',
    answer: 'We are open from 5:00 AM to 10:00 PM on weekdays, and 6:00 AM to 8:00 PM on weekends to accommodate all schedules.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase"
          >
            Frequently Asked Questions
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg transition-colors ${openId === faq.id ? 'text-brand-primary' : 'text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-brand-primary transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
