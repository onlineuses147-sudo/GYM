import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-[100vw] overflow-hidden px-4 sm:px-6 lg:px-8 mx-auto">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
          >
            Gallery
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl font-bold uppercase"
          >
            Inside Mahadev Fitness
          </motion.h3>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto hide-scrollbar pb-8 md:pb-0 snap-x">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 aspect-[4/3] relative rounded-2xl overflow-hidden group snap-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Gym facility ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
