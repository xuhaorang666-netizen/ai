import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import ToolSlides from './components/ToolShowcase';
import AiAssistant from './components/AiAssistant';
import ModelComparison from './components/ModelComparison';
import Resources from './components/Resources';
import Footer from './components/Footer';
import ToolDemo from './pages/ToolDemo';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Agenda />
        <ToolSlides />
        <AiAssistant />
        <ModelComparison />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo/:tool" element={<ToolDemo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
