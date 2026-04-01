import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, BarChart3, PenTool, Settings } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { icon: <LayoutGrid size={22} />, path: '/', label: 'Home' },
    { icon: <BarChart3 size={22} />, path: '/stats', label: 'Stats' },
    { icon: <PenTool size={22} />, path: '/studio', label: 'Studio' },
    { icon: <Settings size={22} />, path: '/settings', label: 'Settings' },
  ];

  return (
    // Desktop: Left Sidebar | Mobile: Bottom Fixed Bar
    <aside className="fixed bottom-0 left-0 w-full h-16 md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2 md:w-20 md:h-auto z-50 px-4 pb-4 md:p-0">
      <div className="flex flex-row md:flex-col items-center justify-around md:justify-center gap-2 md:gap-8 p-3 md:p-5 bg-black/80 md:bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-2xl md:rounded-[2.5rem] shadow-2xl">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl md:rounded-2xl transition-all duration-300 ${
                location.pathname === item.path 
                ? 'bg-royal-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                : 'text-white/30 hover:text-white'
              }`}
            >
              {item.icon}
              {/* Tooltip for desktop only */}
              <span className="hidden md:group-hover:block absolute left-20 bg-royal-gold text-black text-[10px] px-2 py-1 rounded shadow-xl font-bold uppercase">
                {item.label}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;