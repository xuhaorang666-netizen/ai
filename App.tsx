import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import ToolSlides from './components/ToolShowcase';
import AiAssistant from './components/AiAssistant';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Agenda />
        <ToolSlides />
        <AiAssistant />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;