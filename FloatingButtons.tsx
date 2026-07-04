import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 104, label: 'Happy Reviews', suffix: '+' },
  { value: 4.9, label: 'Star Rating', suffix: '/5' },
  { value: 100, label: 'Premium Equipment', suffix: '%' },
  { value: 5, label: 'Certified Trainers', suffix: '+' }
];

function Counter({ from, to, duration, suffix = '' }: { from: number, to: number, duration: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const isFloat = to % 1 !== 0;
      const currentVal = progress * (to - from) + from;
      
      setCount(isFloat ? Number(currentVal.toFixed(1)) : Math.floor(currentVal));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 bg-brand-primary relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
          
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="px-4"
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <div className="text-white/90 font-bold uppercase tracking-wider text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
