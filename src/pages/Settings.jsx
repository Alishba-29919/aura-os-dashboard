import React, { useState } from 'react';
import { User, Shield, Palette, Check, LogOut, Bell, Globe } from 'lucide-react';
import Widget from '../components/Widget';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const menu = [
    { id: 'profile', label: 'User Profile', icon: <User size={18} /> },
    { id: 'appearance', label: 'Design System', icon: <Palette size={18} /> },
    { id: 'security', label: 'Safety & Privacy', icon: <Shield size={18} /> },
  ];

  return (
    <div className="w-full space-y-10 pb-24 px-2 md:px-0">
      <header className="border-b border-white/5 pb-8">
        <h1 className="text-3xl md:text-5xl font-extralight tracking-tighter text-white">
          System<span className="text-royal-gold font-normal italic">Preferences</span>
        </h1>
        <p className="text-white/20 mt-2 font-light text-sm uppercase tracking-widest">Global Account Configuration</p>
      </header>

      {/* --- THE MAIN DESKTOP GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
        
        {/* LEFT MENU (3 or 4 of 12 Columns on Desktop) */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-4 flex flex-col gap-2 backdrop-blur-xl">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 ${
                  activeTab === item.id 
                  ? 'bg-royal-gold text-black font-bold shadow-[0_10px_20px_rgba(212,175,55,0.2)]' 
                  : 'text-white/30 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon} <span className="text-[11px] uppercase font-bold tracking-[0.2em]">{item.label}</span>
              </button>
            ))}
            <div className="h-[1px] bg-white/5 my-4 mx-4" />
            <button className="flex items-center gap-4 px-6 py-5 text-red-500/50 hover:text-red-500 hover:bg-red-500/5 rounded-2xl transition-all">
              <LogOut size={18} /> <span className="text-[11px] uppercase font-bold tracking-[0.2em]">Deactivate Session</span>
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (8 or 9 of 12 Columns on Desktop) */}
        <div className="lg:col-span-8 w-full">
          {activeTab === 'profile' && (
            <Widget title="Public Identity">
              <div className="mt-8 space-y-10">
                <div className="flex flex-col sm:flex-row items-center gap-8 bg-white/[0.01] p-8 rounded-[2rem] border border-white/5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-royal-gold/80 to-yellow-500 flex items-center justify-center text-black text-3xl font-black shadow-2xl">AD</div>
                  <div className="space-y-3 text-center sm:text-left">
                    <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Update Avatar</button>
                    <p className="text-[10px] text-white/20 font-medium">Recommended: 800x800 High-Res Square</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-white/30 uppercase font-black tracking-widest">Legal Name</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-royal-gold/50" defaultValue="Alina Dev" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-white/30 uppercase font-black tracking-widest">Handle / URL</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-royal-gold/50" defaultValue="auraos.com/alina" />
                  </div>
                </div>
              </div>
            </Widget>
          )}

          {activeTab === 'appearance' && (
            <Widget title="Visual Experience">
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-royal-gold/10 border-2 border-royal-gold rounded-[2.5rem] flex justify-between items-center group cursor-pointer shadow-2xl">
                  <div className="flex items-center gap-4">
                    <Palette className="text-royal-gold" size={24} />
                    <span className="text-sm font-bold tracking-tight">Legacy Gold</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-royal-gold flex items-center justify-center"><Check size={14} className="text-black" /></div>
                </div>
                <div className="p-8 bg-white/[0.02] border-2 border-white/5 rounded-[2.5rem] flex justify-between items-center opacity-30 hover:opacity-100 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                    <Globe className="text-white" size={24} />
                    <span className="text-sm font-medium">System Dynamic</span>
                  </div>
                </div>
              </div>
            </Widget>
          )}
        </div>

      </div>
    </div>
  );
};

export default Settings;