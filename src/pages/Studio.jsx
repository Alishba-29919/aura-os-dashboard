import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Sparkles, CheckCircle2, Smartphone, Share2 } from 'lucide-react';
import Widget from '../components/Widget';

const Studio = () => {
  const [title, setTitle] = useState("My Awesome Video Title");
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="w-full space-y-10 pb-24 px-2 md:px-0">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-8 gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tighter text-white">
            Content<span className="text-royal-gold font-normal italic">Studio</span>
          </h1>
          <p className="text-white/20 mt-2 font-light text-sm italic">Design. Preview. Publish.</p>
        </div>
        <button 
          onClick={() => setIsUploading(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-royal-gold rounded-2xl text-black font-bold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
        >
          {isUploading ? <CheckCircle2 size={20} /> : <Upload size={20} />}
          {isUploading ? "PUBLISHED!" : "PUBLISH NOW"}
        </button>
      </header>

      {/* --- THE MAIN DESKTOP GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full overflow-hidden">
        
        {/* LEFT COLUMN: Editor (8 of 12 Columns) */}
        <div className="order-2 lg:order-1 lg:col-span-8 w-full space-y-8">
          <Widget title="Video Metadata">
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">Video Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-white focus:border-royal-gold outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">Description</label>
                <textarea 
                  className="w-full h-44 bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-white focus:border-royal-gold outline-none transition-all resize-none"
                  placeholder="Tell your story..."
                />
              </div>
            </div>
          </Widget>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget title="Thumbnail">
              <div className="mt-2 h-44 border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-2 hover:border-royal-gold/40 transition-all cursor-pointer group">
                <ImageIcon size={32} className="text-white/10 group-hover:text-royal-gold" />
                <p className="text-[10px] text-white/20 uppercase font-bold">Upload Media</p>
              </div>
            </Widget>
            <Widget title="AI Intelligence">
              <div className="mt-4 space-y-4">
                <p className="text-xs text-white/30 leading-relaxed font-light">Generate SEO tags and high-conversion captions using AuraAI.</p>
                <button className="w-full py-4 bg-white/5 rounded-2xl text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 border border-white/10">
                  <Sparkles size={16} className="text-royal-gold" /> Magic Tags
                </button>
              </div>
            </Widget>
          </div>
        </div>

        {/* RIGHT COLUMN: Mobile Preview (4 of 12 Columns) */}
        <div className="order-1 lg:order-2 lg:col-span-4 w-full flex justify-center lg:justify-end">
          <div className="sticky top-10 flex flex-col items-center w-full max-w-[320px]">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
              <Smartphone size={14} /> Live Sync
            </p>

            {/* IPHONE MOCKUP */}
            <div className="relative w-full aspect-[9/19] bg-black border-[12px] border-[#151515] rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#151515] rounded-b-3xl z-20" />
              <div className="h-full w-full flex flex-col bg-[#050505]">
                <div className="h-1/2 bg-gradient-to-br from-royal-gold/30 to-transparent flex items-center justify-center">
                   <Upload className="text-royal-gold/40 animate-pulse" size={40} />
                </div>
                <div className="p-6 space-y-4 flex-1 bg-black/60 backdrop-blur-2xl">
                   <h3 className="text-white text-sm font-semibold truncate-2-lines">{title}</h3>
                   <div className="w-12 h-1 bg-royal-gold/20 rounded-full" />
                   <div className="flex gap-2 pt-8">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30"><Share2 size={16}/></div>
                      <div className="flex-1 h-10 bg-royal-gold rounded-xl flex items-center justify-center text-[11px] font-black text-black uppercase">Subscribe</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Studio;