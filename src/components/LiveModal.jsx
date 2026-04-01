import React, { useState } from 'react';
import { X, Radio, Signal, Users, ShieldCheck, Zap, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveModal = ({ isOpen, onClose }) => {
  const [isStarting, setIsStarting] = useState(false);
  const [isLive, setIsLive] = useState(false);

  if (!isOpen) return null;

  const handleStartLive = () => {
    setIsStarting(true);
    setTimeout(() => {
      setIsStarting(false);
      setIsLive(true);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Top Status Bar */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-600 animate-pulse' : 'bg-white/10'}`} />
              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">
                {isLive ? 'Broadcast: Active' : 'Broadcast: Offline'}
              </span>
            </div>
            <button onClick={onClose} className="text-white/20 hover:text-white transition-colors"><X size={20} /></button>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT: Stream Preview Area */}
            <div className="space-y-4">
              <div className="aspect-video bg-white/[0.03] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden group">
                {isLive ? (
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-black flex items-center justify-center">
                    <Signal size={40} className="text-red-600 animate-bounce" />
                  </div>
                ) : (
                  <>
                    <Radio size={40} className="text-white/5 group-hover:text-royal-gold transition-colors" />
                    <p className="text-[10px] text-white/10 uppercase mt-4 font-bold">Camera Feed Offline</p>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                   <Users size={16} className="mx-auto mb-1 text-royal-gold" />
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">0 Viewers</span>
                </div>
                <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                   <Zap size={16} className="mx-auto mb-1 text-royal-gold" />
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Excellent</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Stream Settings */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase font-black tracking-widest">Stream Title</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white outline-none focus:border-royal-gold/50" defaultValue="Weekly Dev Chill & Code" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase font-black tracking-widest">Category</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white outline-none appearance-none">
                  <option>Software & Development</option>
                  <option>Gaming</option>
                  <option>IRL / Lifestyle</option>
                </select>
              </div>
              
              {!isLive ? (
                <button 
                  onClick={handleStartLive}
                  disabled={isStarting}
                  className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(220,38,38,0.3)] flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  {isStarting ? <Loader2 size={18} className="animate-spin" /> : <><Signal size={18} /> Start Stream</>}
                </button>
              ) : (
                <button 
                  onClick={() => setIsLive(false)}
                  className="w-full py-5 bg-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
                >
                  End Broadcast
                </button>
              )}
              <div className="flex items-center gap-2 justify-center py-2">
                <ShieldCheck size={14} className="text-royal-gold" />
                <span className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Protected Connection</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LiveModal;