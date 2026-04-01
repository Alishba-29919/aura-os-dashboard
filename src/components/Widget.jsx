import { motion } from 'framer-motion';

const Widget = ({ title, children, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
      className={`bg-glass-bg border border-glass-border backdrop-blur-xl rounded-[2.5rem] p-6 shadow-xl transition-all duration-300 ${className}`}
    >
      {title && (
        <h3 className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

export default Widget;