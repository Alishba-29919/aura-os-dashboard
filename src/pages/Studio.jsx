import React, { useState, useEffect } from 'react';
import { Send, Video, Layout, Trash2, Eye, MessageSquare, Share2, Image as ImageIcon } from 'lucide-react';

const Studio = () => {
  const [post, setPost] = useState({
    title: "",
    category: "Luxury Lifestyle",
    description: "",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
  });

  const [feed, setFeed] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('aura_studio_v2');
    if (saved) setFeed(JSON.parse(saved));
  }, []);

  const handlePublish = () => {
    if (!post.title) return alert("Alishba, Title is mandatory for the Aura vibes! ✨");

    const newEntry = {
      ...post,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      views: "0",
      likes: "0"
    };

    const updatedFeed = [newEntry, ...feed];
    setFeed(updatedFeed);
    localStorage.setItem('aura_studio_v2', JSON.stringify(updatedFeed));
    
    // Reset form but keep thumbnail
    setPost({ ...post, title: "", description: "" });
    alert("Published to AuraOS Network! 🚀");
  };

  const deleteEntry = (id) => {
    const filtered = feed.filter(item => item.id !== id);
    setFeed(filtered);
    localStorage.setItem('aura_studio_v2', JSON.stringify(filtered));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-6 lg:p-10 font-sans selection:bg-yellow-500/30">
      
      {/* --- TOP BAR --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700">
            Aura Studio Pro
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Authorized Access: Alishba Dev</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div> System Online
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* --- LEFT: COMMAND CENTER (INPUTS) --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-transparent"></div>
            <h2 className="text-xs font-black text-yellow-500 mb-6 uppercase tracking-[0.2em]">Input Content</h2>
            
            <div className="space-y-5">
              <div>
                <label className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block ml-1">Stream / Post Title</label>
                <input 
                  type="text" 
                  value={post.title}
                  onChange={(e) => setPost({...post, title: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/5 p-4 rounded-2xl focus:border-yellow-500/50 outline-none transition-all text-sm placeholder:text-gray-700"
                  placeholder="The Golden Hour..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block ml-1">Category</label>
                  <select 
                    value={post.category}
                    onChange={(e) => setPost({...post, category: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/5 p-4 rounded-2xl focus:border-yellow-500/50 outline-none text-xs appearance-none cursor-pointer"
                  >
                    <option>Luxury Lifestyle</option>
                    <option>Tech Elite</option>
                    <option>Architecture</option>
                    <option>Aura Vlogs</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block ml-1">Thumbnail URL</label>
                  <input 
                    type="text" 
                    onChange={(e) => setPost({...post, thumbnail: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/5 p-4 rounded-2xl focus:border-yellow-500/50 outline-none text-xs"
                    placeholder="Image URL..."
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block ml-1">Brief Description</label>
                <textarea 
                  rows="3"
                  value={post.description}
                  onChange={(e) => setPost({...post, description: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/5 p-4 rounded-2xl focus:border-yellow-500/50 outline-none transition-all text-sm resize-none"
                  placeholder="Define the aura..."
                ></textarea>
              </div>

              <button 
                onClick={handlePublish}
                className="w-full py-5 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(202,138,4,0.2)]"
              >
                Publish Experience
              </button>
            </div>
          </div>
        </div>

        {/* --- MIDDLE: LIVE PREVIEW --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 p-2 rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-6 left-6 z-10 bg-red-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">Live Preview</div>
            <img 
              src={post.thumbnail} 
              alt="Preview" 
              className="w-full h-[450px] object-cover rounded-[2rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <p className="text-yellow-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">{post.category}</p>
              <h3 className="text-2xl font-bold mb-3 leading-tight">{post.title || "Your Title Here"}</h3>
              <p className="text-gray-400 text-xs line-clamp-2 italic">"{post.description || "No description provided yet..."}"</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT: ACTIVITY FEED --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-[2rem] h-[580px] flex flex-col">
            <h2 className="text-[10px] font-black text-gray-500 mb-6 uppercase tracking-[0.2em]">Recently Published</h2>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {feed.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center opacity-20">
                  <Layout size={48} className="mb-4" />
                  <p className="text-[10px] uppercase tracking-widest">No Records Found</p>
                </div>
              )}

              {feed.map((item) => (
                <div key={item.id} className="group bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.05] transition-all">
                  <div className="flex gap-4 items-center">
                    <img src={item.thumbnail} className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold truncate w-40">{item.title}</h4>
                      <p className="text-[9px] text-gray-600 uppercase tracking-tighter mt-1">{item.date} • {item.category}</p>
                    </div>
                    <button onClick={() => deleteEntry(item.id)} className="p-2 text-gray-800 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Studio;