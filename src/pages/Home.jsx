import React, { useState } from 'react';
import { 
  Users, Eye, Zap, DollarSign, Video, 
  CalendarDays, ArrowUpRight, Clock, Trash2, 
  Star, BellDot, Signal, Radio 
} from 'lucide-react'; 
import StatCard from '../components/StatCard';
import Widget from '../components/Widget';
import ScheduleModal from '../components/ScheduleModal';
import LiveModal from '../components/LiveModal';

const Home = () => {
  // --- 1. STATES ---
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  
  // Real State for Schedule List
  const [scheduledEvents, setScheduledEvents] = useState([
    { id: 1, date: '2026-04-15', time: '20:00', title: 'React Performance Workshop' },
    { id: 2, date: '2026-04-20', time: '12:30', title: 'AuraOS Feature Reveal' },
  ]);

  // --- 2. FUNCTIONS ---
  const handleAddEvent = (newDate, newTime) => {
    const newEntry = {
      id: Date.now(),
      date: newDate,
      time: newTime,
      title: "New Scheduled Stream"
    };
    setScheduledEvents([newEntry, ...scheduledEvents]);
  };

  const deleteEvent = (id) => {
    setScheduledEvents(scheduledEvents.filter(event => event.id !== id));
  };

  return (
    <div className="space-y-10 pb-24 px-2 md:px-0">
      
      {/* --- HEADER SECTION --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-8 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter text-white uppercase">
            Aura<span className="text-royal-gold font-normal italic">OS</span>
          </h1>
          <p className="text-white/20 mt-2 font-light text-sm md:text-lg italic">
            Command Center / <span className="text-white/80 font-medium not-italic">Alishba Dev</span>
          </p>
        </div>
        
        <div className="flex flex-row gap-3 w-full md:w-auto">
          {/* Schedule Button */}
          <button 
            onClick={() => setIsScheduleOpen(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <CalendarDays size={18} /> Schedule
          </button>
          
          {/* Go Live Button */}
          <button 
            onClick={() => setIsLiveOpen(true)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 p-4 bg-red-600 rounded-2xl text-xs text-white font-black uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Video size={18} className="relative z-10" /> 
            <span className="relative z-10">Go Live</span>
          </button>
        </div>
      </header>

      {/* --- STATS GRID --- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Subscribers" value="128.4K" change="+12%" icon={Users} />
        <StatCard title="Views" value="2.1M" change="+8%" icon={Eye} />
        <StatCard title="Engagement" value="68.4%" change="+2%" icon={Zap} />
        <StatCard title="Revenue" value="$4,520" change="+15%" icon={DollarSign} />
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT: Top Content (7 Columns) */}
        <div className="lg:col-span-7 space-y-8 w-full">
          <Widget title="Performance Leaders">
            <div className="mt-6 space-y-4">
              {[
                { title: "Mastering Tailwind 4.0", views: "142K", growth: "+12%" },
                { title: "Luxury UI Design Secrets", views: "98K", growth: "+5%" },
                { title: "Building AuraOS Part 1", views: "76K", growth: "+22%" }
              ].map((video, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-[2rem] group cursor-pointer hover:bg-white/[0.05] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-royal-gold transition-colors">
                    <Video size={20} className="group-hover:text-black transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">{video.title}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-[10px] text-white/20 uppercase tracking-widest">{video.views} Views</p>
                      <span className="text-[9px] text-royal-gold font-bold">{video.growth}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-white/10 group-hover:text-royal-gold" />
                </div>
              ))}
            </div>
          </Widget>

          {/* Activity Mini-Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget title="Creator Status">
               <div className="mt-4 flex items-center gap-4">
                  <div className="p-4 bg-royal-gold/10 rounded-2xl">
                    <Star className="text-royal-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest">VIP Partner</p>
                    <p className="text-[10px] text-white/20">Next Milestone: 150K Subs</p>
                  </div>
               </div>
            </Widget>
            <Widget title="Active Alerts">
               <div className="mt-4 flex items-center gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <BellDot className="text-white/20" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest">2 New Inquiries</p>
                    <p className="text-[10px] text-white/20 text-red-500 font-bold italic underline">Urgent</p>
                  </div>
               </div>
            </Widget>
          </div>
        </div>

        {/* RIGHT: Upcoming Schedule (5 Columns) */}
        <div className="lg:col-span-5 space-y-8 w-full">
          <Widget title="Upcoming Schedule">
            <div className="mt-6 space-y-4">
              {scheduledEvents.length === 0 ? (
                <div className="py-16 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[2.5rem] opacity-20">
                   <Radio size={32} className="mb-2" />
                   <p className="text-xs italic tracking-widest uppercase font-bold">Planner Empty</p>
                </div>
              ) : (
                scheduledEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-[2.5rem] group hover:border-royal-gold/30 transition-all backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-royal-gold/10 flex items-center justify-center text-royal-gold shadow-inner shadow-royal-gold/5">
                        <Clock size={18} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[11px] font-black text-white uppercase tracking-widest group-hover:text-royal-gold transition-colors">{event.title}</h4>
                        <p className="text-[10px] text-white/30 mt-1 font-mono">{event.date} // {event.time}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteEvent(event.id)}
                      className="p-2 text-white/10 hover:text-red-500 transition-colors transform hover:rotate-12"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>
            {scheduledEvents.length > 0 && (
               <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-[9px] text-white/10 uppercase tracking-[0.5em]">Command Center Sync Active</p>
               </div>
            )}
          </Widget>

          {/* Quick Signal Stat */}
          <div className="p-8 bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/10 rounded-[2.5rem] flex items-center justify-between">
             <div>
                <p className="text-[10px] text-red-500 font-black uppercase tracking-widest">Stream Health</p>
                <h3 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">Optimal</h3>
             </div>
             <Signal size={32} className="text-red-600 animate-pulse" />
          </div>
        </div>

      </div>

      {/* --- MODAL RENDERING --- */}
      <ScheduleModal 
        isOpen={isScheduleOpen} 
        onClose={() => setIsScheduleOpen(false)} 
        onConfirm={handleAddEvent}
      />
      
      <LiveModal 
        isOpen={isLiveOpen} 
        onClose={() => setIsLiveOpen(false)} 
      />

    </div>
  );
};

export default Home;