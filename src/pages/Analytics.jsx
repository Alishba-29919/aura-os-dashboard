import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { TrendingUp, Users, Clock, MousePointer2, Share2, Globe } from 'lucide-react';
import Widget from '../components/Widget';

// --- DUMMY DATA FOR CHARTS ---
const viewsData = [
  { name: 'Mon', v: 4000, e: 2400 }, { name: 'Tue', v: 3000, e: 1398 },
  { name: 'Wed', v: 2000, e: 9800 }, { name: 'Thu', v: 2780, e: 3908 },
  { name: 'Fri', v: 1890, e: 4800 }, { name: 'Sat', v: 2390, e: 3800 },
  { name: 'Sun', v: 3490, e: 4300 },
];

const deviceData = [
  { name: 'Mobile', value: 700, color: '#D4AF37' },
  { name: 'Desktop', value: 200, color: 'rgba(255,255,255,0.1)' },
  { name: 'Tablet', value: 100, color: 'rgba(212, 175, 55, 0.4)' },
];

const Analytics = () => {
  return (
    <div className="space-y-10 pb-24">
      
      {/* HEADER SECTION */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-8 gap-6">
  <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tighter">
      Channel<span className="text-royal-gold font-normal italic">Insights</span>
    </h1>
    <p className="text-white/20 mt-2 font-light text-sm">Real-time data visualization</p>
  </div>
  
  {/* Filter Box: on mobile full width, on desktop  auto */}
  <div className="flex w-full sm:w-auto gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
    <button className="flex-1 sm:flex-none px-4 py-2 text-[10px] text-royal-gold bg-royal-gold/10 rounded-lg font-medium">7 Days</button>
    <button className="flex-1 sm:flex-none px-4 py-2 text-[10px] text-white/30 hover:text-white transition-all">30 Days</button>
    <button className="flex-1 sm:flex-none px-4 py-2 text-[10px] text-white/30 hover:text-white transition-all">Year</button>
  </div>
</header>

      {/* 1. MAIN GROWTH CHART (BIG) */}
      <Widget title="Audience Growth & Engagement">
        <div className="h-[400px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={viewsData}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#080808', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px', color: '#fff' }}
                itemStyle={{ color: '#D4AF37' }}
              />
              <Area type="monotone" dataKey="v" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              <Area type="monotone" dataKey="e" stroke="rgba(255,255,255,0.2)" strokeWidth={2} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Widget>

      {/* 2. SECONDARY METRICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Device Distribution (Pie Chart) */}
        <Widget title="Device Traffic">
          <div className="h-64 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={deviceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-4">
              {deviceData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Widget>

        {/* Retention Stats */}
        <Widget title="Audience Retention">
          <div className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/40">Intro (0:00-0:30)</span>
                <span className="text-royal-gold font-medium">89%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-royal-gold w-[89%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/40">Middle Content</span>
                <span className="text-white/80 font-medium">62%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-white/20 w-[62%]" />
              </div>
            </div>
            <p className="text-[10px] text-white/20 leading-relaxed italic">
              * Your retention is 5% higher than similar creators in this niche.
            </p>
          </div>
        </Widget>

        {/* Key Performance Indicators */}
        <Widget title="Quick KPIs">
          <div className="mt-4 space-y-4">
            {[
              { label: 'Click Through Rate', val: '12.4%', icon: <MousePointer2 size={14}/> },
              { label: 'Avg View Duration', val: '4:52', icon: <Clock size={14}/> },
              { label: 'Total Shares', val: '8.2K', icon: <Share2 size={14}/> },
              { label: 'Global Rank', val: '#1,204', icon: <Globe size={14}/> },
            ].map((kpi, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-all">
                <div className="flex items-center gap-3 text-white/40">
                  {kpi.icon}
                  <span className="text-xs">{kpi.label}</span>
                </div>
                <span className="text-sm font-medium text-white">{kpi.val}</span>
              </div>
            ))}
          </div>
        </Widget>

      </div>

      {/* 3. RECENT VIDEOS PERFORMANCE TABLE */}
      <Widget title="Detailed Video Analytics">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 text-white/30 uppercase text-[10px] tracking-widest">
                <th className="pb-4 font-medium">Video Title</th>
                <th className="pb-4 font-medium">Views</th>
                <th className="pb-4 font-medium">Revenue</th>
                <th className="pb-4 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              {[
                { name: "My 2026 Desk Setup", v: "45K", r: "$420", t: "up" },
                { name: "Coding in Metaverse", v: "32K", r: "$310", t: "up" },
                { name: "The AI Revolution", v: "28K", r: "$190", t: "down" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/[0.02] last:border-none group">
                  <td className="py-4 font-light group-hover:text-royal-gold transition-colors">{row.name}</td>
                  <td className="py-4 font-light">{row.v}</td>
                  <td className="py-4 font-light text-emerald-400">{row.r}</td>
                  <td className="py-4">
                    <TrendingUp size={16} className={row.t === 'up' ? 'text-emerald-500' : 'text-red-500 rotate-180'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Widget>

    </div>
  );
};

export default Analytics;