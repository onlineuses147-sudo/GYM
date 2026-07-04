import { motion } from 'motion/react';
import { Activity, BicepsFlexed, Flame, Heart, PersonStanding, Timer } from 'lucide-react';

const services = [
  {
    icon: BicepsFlexed,
    title: 'Muscle Building',
    desc: 'Hypertrophy-focused training with heavy free weights and premium machines.'
  },
  {
    icon: Activity,
    title: 'Cross-Fit Style',
    desc: 'High-intensity functional training to build stamina, strength, and agility.'
  },
  {
    icon: Heart,
    title: 'Cardio Fitness',
    desc: 'Top-of-the-line treadmills, ellipticals, and bikes for cardiovascular health.'
  },
  {
    icon: Flame,
    title: 'Weight Loss/Gain',
    desc: 'Tailored programs designed to help you shed fat or bulk up effectively.'
  },
  {
    icon: PersonStanding,
    title: 'Personal Training',
    desc: '1-on-1 coaching with certified experts who keep you accountable.'
  },
  {
    icon: Timer,
    title: 'Strength Training',
    desc: 'Master powerlifting basics and build a foundation of raw strength.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6"
          >
            Premium Services
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Whether your goal is to build muscle, lose weight, or improve overall fitness, our comprehensive training programs and equipment have you covered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-dark-700 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors duration-300 border border-white/5">
                <service.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
