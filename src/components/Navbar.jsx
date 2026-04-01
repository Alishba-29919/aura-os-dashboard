import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, X, Film, Calendar, Settings as SettingsIcon, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const database = [
    { id: 1, title: "React vs Vue: 2026", type: "Video", icon: <Film size={14}/>, color: "text-blue-400" },
    { id: 2, title: "Product Launch Live", type: "Event", icon: <Calendar size={14}/>, color: "text-royal-gold" },
    { id: 3, title: "Account Preferences", type: "Settings", icon: <SettingsIcon size={14}/>, color: "text-emerald-400" },
  ];

  const results = database.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full mb-10 relative z-[100]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* --- SEARCH BAR CONTAINER --- */}
        <div className="relative w-full md:w-[500px]" ref={searchRef}>
          <div className="relative group">
            {/* Left Decorative Icon */}
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${isOpen ? 'bg-royal-gold shadow-[0_0_8px_#d4af37]' : 'bg-white/10'}`} />
            </div>
            
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Search anything..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-[1.8rem] py-5 pl-12 pr-28 text-sm text-white placeholder:text-white/10 focus:border-royal-gold/40 focus:bg-white/[0.07] outline-none transition-all backdrop-blur-2xl"
            />

            {/* RIGHT SIDE ICONS (Search + Clear) */}
            <div className="absolute inset-y-0 right-2 flex items-center gap-2">
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="p-2 text-white/20 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              
              {/* --- THE CLICKABLE SEARCH ICON BUTTON --- */}
              <button 
                onClick={() => setIsOpen(true)}
                className="bg-royal-gold hover:bg-yellow-500 text-black p-2.5 rounded-[1.2rem] transition-all active:scale-90 shadow-lg shadow-royal-gold/20"
              >
                <Search size={18} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* --- RESULTS PANEL --- */}
          {isOpen && searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-4 bg-[#0A0A0A]/95 border border-white/10 rounded-[2.5rem] p-5 shadow-2xl backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200">
              <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.2em] mb-4 ml-2">Quick Results</p>
              <div className="space-y-1">
                {results.length > 0 ? (
                  results.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 hover:bg-white/[0.03] rounded-2xl cursor-pointer group transition-all border border-transparent hover:border-white/5">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>{item.icon}</div>
                        <span className="text-xs font-bold text-white/70 group-hover:text-white">{item.title}</span>
                      </div>
                      <ChevronRight size={14} className="text-white/5 group-hover:text-royal-gold" />
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-white/20 italic py-6 text-center">No results found...</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE PROFILE --- */}
        <div className="flex items-center gap-6">
          <button className="relative p-3 text-white/30 hover:text-royal-gold transition-all">
            <Bell size={22} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-royal-gold rounded-full border-2 border-[#080808]" />
          </button>

          <div className="flex items-center gap-4 p-1 pr-4 bg-white/[0.02] border border-white/5 rounded-[1.4rem] hover:border-royal-gold/20 transition-all cursor-pointer group">
            <div className="w-11 h-11 rounded-[1.1rem] bg-royal-gold flex items-center justify-center text-black font-black">AD</div>
            <div className="hidden sm:block text-left">
              <p className="text-[11px] font-black text-white uppercase">Alishba Dev</p>
              <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Verified Pro</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;