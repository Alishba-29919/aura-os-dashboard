import { motion } from 'framer-motion';

const StatCard = ({ title, value, change }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
      className="bg-glass-bg border border-glass-border p-6 rounded-3xl backdrop-blur-md"
    >
      <h3 className="text-white/40 text-sm font-medium uppercase tracking-wider">{title}</h3>
      <div className="flex items-baseline gap-4 mt-2">
        <h2 className="text-3xl font-light text-white">{value}</h2>
        <span className="text-emerald-400 text-sm">{change}</span>
      </div>
    </motion.div>
  );
};

export default StatCard;