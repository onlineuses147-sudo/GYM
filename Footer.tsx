import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul V.',
    text: 'Best gym in Khammam! The trainers are very friendly and the equipment is top-notch. Highly recommend for anyone looking for serious results.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sandeep K.',
    text: 'Great ambiance and very clean. Fully AC which makes a huge difference during summer. The cross-fit section is exactly what I was looking for.',
    rating: 5
  },
  {
    id: '3',
    name: 'Priya M.',
    text: 'Safe and comfortable environment for women. Personal coaching helped me achieve my weight loss goals faster than I expected.',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-primary/5 rounded-[100%] blur-[120px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Real Results
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6"
          >
            What Our Members Say
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="text-xl font-bold">4.9/5</span>
          </motion.div>
          <p className="text-gray-400">Based on 104+ verified reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group hover:border-brand-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 transform group-hover:text-brand-primary/10 transition-colors" />
              
              <div className="flex text-brand-primary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center font-bold text-xl text-white border-2 border-brand-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-brand-primary">Verified Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
