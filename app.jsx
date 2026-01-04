import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AIChat from './components/AIChat';
import CivicVision from './components/CivicVision';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('home');

  return (
    <div className={`min-h-screen transition-colors duration-500 ${mode === 'home' ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50' : 'bg-black overflow-hidden fixed inset-0'}`}>
      
      {/* Dynamic Navbar based on Mode */}
      <Navbar currentMode={mode} onSwitchMode={setMode} />

      {mode === 'home' ? (
        <>
          <main>
            <Hero onStart={() => setMode('civic')} />
            <HowItWorks />
          </main>
          <AIChat />
          <footer className="py-12 bg-white/40 border-t border-white/60 text-center text-gray-500 text-sm font-light">
            <p>© 2024 Imagin. All rights reserved.</p>
            <p className="mt-2">Powered by Google Gemini 3</p>
          </footer>
        </>
      ) : (
        /* Full Screen Civic Mode */
        <div className="absolute inset-0 top-0 h-full w-full z-0">
           <CivicVision />
        </div>
      )}
    </div>
  );
};

export default App;
