import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="tel:07997841331"
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={24} fill="currentColor" />
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        // Using a standard WhatsApp link format
        href="https://wa.me/917997841331" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
