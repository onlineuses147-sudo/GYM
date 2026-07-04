import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height) return;

    // Assuming weight is in kg and height is in cm
    const hInMeters = parseFloat(height) / 100;
    const w = parseFloat(weight);
    
    if (hInMeters > 0 && w > 0) {
      const calculatedBmi = w / (hInMeters * hInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      
      if (calculatedBmi < 18.5) {
        setStatus('Underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        setStatus('Normal weight');
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    }
  };

  const getStatusColor = () => {
    if (status === 'Normal weight') return 'text-brand-primary';
    if (status === 'Underweight' || status === 'Overweight') return 'text-yellow-400';
    return 'text-red-500';
  };

  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3"
            >
              Track Your Progress
            </motion.h2>
            <motion.h3 
              className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6"
            >
              Calculate Your BMI
            </motion.h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this tool to get an estimate of your current BMI.
            </p>
            
            <ul className="space-y-4 max-w-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Underweight</span>
                <span className="text-white font-bold">Below 18.5</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-brand-primary font-bold">Normal weight</span>
                <span className="text-white font-bold">18.5 - 24.9</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Overweight</span>
                <span className="text-white font-bold">25.0 - 29.9</span>
              </li>
              <li className="flex justify-between border-white/5 pb-2">
                <span className="text-gray-400">Obese</span>
                <span className="text-white font-bold">30.0 and Above</span>
              </li>
            </ul>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-dark-700 rounded-xl flex items-center justify-center text-brand-primary border border-brand-primary/20">
                <Calculator size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white">BMI Calculator</h4>
            </div>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input 
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input 
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors text-lg"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary text-white font-bold text-lg rounded-xl hover:bg-white hover:text-dark-900 transition-all box-glow"
              >
                Calculate BMI
              </button>
            </form>

            <AnimatePresence>
              {bmi && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="bg-dark-800 rounded-xl p-6 text-center border border-white/5"
                >
                  <p className="text-gray-400 mb-2">Your BMI is</p>
                  <div className="font-heading text-5xl font-bold text-white mb-2">
                    {bmi}
                  </div>
                  <div className={`font-bold text-lg uppercase tracking-wider ${getStatusColor()}`}>
                    {status}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
