import { motion } from 'motion/react';
import { Wind, Dumbbell, Droplet, ShieldCheck } from 'lucide-react';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay group-hover:bg-brand-primary/0 transition-all duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-square lg:aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
            >
              World-Class Environment
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6"
            >
              Premium Facilities
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-10"
            >
              Train comfortably in Khammam's best-equipped gym. We prioritize cleanliness, safety, and providing an energetic ambiance to keep you motivated.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Wind, title: 'Fully Air Conditioned', desc: 'Stay cool and comfortable during intense workouts.' },
                { icon: Dumbbell, title: 'Heavy Duty Equipment', desc: 'Top-brand machines and extensive free weights.' },
                { icon: Droplet, title: 'Clean & Hygienic', desc: 'Sanitized daily for a safe training environment.' },
                { icon: ShieldCheck, title: 'Secure Lockers', desc: 'Safe storage for your personal belongings.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="bg-dark-800 p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors"
                >
                  <item.icon size={28} className="text-brand-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
