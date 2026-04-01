import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Studio from './pages/Studio';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      {/* Background stays fixed */}
      <div className="bg-obsidian min-h-screen text-white relative overflow-x-hidden">
        
        {/* Background Glows */}
        <div className="fixed top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-royal-gold/5 blur-[120px] pointer-events-none" />

        {/* Sidebar: Mobile par bottom bar, Desktop par side bar */}
        <Sidebar />

        {/* --- MAIN CONTENT AREA --- */}
        {/* ml-0: Mobile par margin nahi hoga (Content full width) */}
        {/* md:ml-28: Sirf desktop (medium screens+) par sidebar ki jagah chorega */}
        <main className="transition-all duration-500 ml-0 md:ml-28 p-4 sm:p-6 md:p-10 pb-32 md:pb-10">
          
          {/* Content ko center mein rakhne ke liye max-width container */}
          <div className="max-w-[1400px] mx-auto w-full">
            <Navbar />
            
            <div className="mt-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stats" element={<Analytics />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
          
        </main>

      </div>
    </Router>
  );
}

export default App;