import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 'monthly',
    name: '1 Month',
    price: '₹1,500',
    duration: '/month',
    features: [
      'Full Gym Access',
      'Cardio & Weights Area',
      'Locker Facility',
      'Free Diet Consultation'
    ]
  },
  {
    id: 'quarterly',
    name: '3 Months',
    price: '₹4,000',
    duration: '/3 months',
    popular: true,
    features: [
      'Full Gym Access',
      'Cardio & Weights Area',
      'Locker Facility',
      'Free Diet Consultation',
      '1 Personal Training Session'
    ]
  },
  {
    id: 'yearly',
    name: '12 Months',
    price: '₹12,000',
    duration: '/year',
    features: [
      'Full Gym Access',
      'Cardio & Weights Area',
      'Locker Facility',
      'Customized Diet Plan',
      '3 Personal Training Sessions',
      'Freeze Membership (1 Month)'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Membership
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6"
          >
            Choose Your Plan
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Transparent pricing with no hidden fees. Invest in yourself today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-dark-800 to-dark-900 border-2 border-brand-primary shadow-[0_0_30px_rgba(220,38,38,0.15)] transform md:-translate-y-4 z-10' 
                  : 'glass-panel border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider box-glow">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-gray-300 mb-4">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-5xl font-bold text-white">{plan.price}</span>
                </div>
                <span className="text-gray-400 text-sm">{plan.duration}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-brand-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-brand-primary text-white hover:bg-white hover:text-dark-900 box-glow'
                    : 'bg-dark-700 text-white hover:bg-brand-primary hover:text-white'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
