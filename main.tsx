import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Workout"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-1 bg-brand-primary rounded-full" />
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">
              Khammam's Premier Fitness Destination
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold uppercase leading-[1.1] mb-6"
          >
            Train Hard.<br />
            Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-red-400 text-glow">Consistent.</span><br />
            Transform.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Experience world-class equipment, certified coaches, and an inspiring atmosphere at Mahadev Fitness & Gym. Your fitness journey starts here.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all transform hover:scale-105"
            >
              Start Your Journey <ArrowRight size={20} />
            </a>
            <a
              href="tel:07997841331"
              className="flex items-center justify-center gap-2 px-8 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all border border-brand-primary/30 hover:border-brand-primary"
            >
              <Phone size={20} className="text-brand-primary" /> Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative neon elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-red-500/10 rounded-full blur-[120px] z-0" />
    </section>
  );
}
