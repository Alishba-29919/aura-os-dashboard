import React, { useState } from 'react';
import { X, Calendar, Clock, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScheduleModal = ({ isOpen, onClose, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!date || !time) {
      alert("Please select both Date and Time! 🕒");
      return;
    }

    setIsProcessing(true);

    // Simulated API Call
    setTimeout(() => {
      // Home.jsx ke function ko data bhejna
      onConfirm(date, time);
      
      setIsProcessing(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setDate('');
        setTime('');
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className="relative w-full max-w-md bg-[#0D0D0D] border border-white/10 rounded-[3rem] p-8 shadow-2xl overflow-hidden"
        >
          {/* Success Animation Overlay */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 z-50 bg-royal-gold flex flex-col items-center justify-center text-black text-center px-6"
              >
                <CheckCircle2 size={60} className="mb-4 animate-bounce" />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Event Locked!</h3>
                <p className="text-sm font-medium opacity-80 mt-2">Saved to your upcoming schedule</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-extralight text-white tracking-tighter">
              Aura<span className="text-royal-gold font-normal italic">Planner</span>
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/20">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black ml-1">Select Date</label>
              <div className="relative group">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-royal-gold/50 group-focus-within:text-royal-gold transition-colors" size={18} />
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm text-white outline-none focus:border-royal-gold/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black ml-1">Select Time</label>
              <div className="relative group">
                <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-royal-gold/50 group-focus-within:text-royal-gold transition-colors" size={18} />
                <input 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm text-white outline-none focus:border-royal-gold/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              disabled={isProcessing}
              className="w-full py-5 bg-royal-gold text-black rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <> <Loader2 size={18} className="animate-spin" /> Processing... </>
              ) : (
                <> Confirm Schedule <ChevronRight size={16} /> </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ScheduleModal;