import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, MonitorPlay } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '会议议程', href: '#agenda' },
    { name: 'Cursor 实战', href: '#cursor' },
    { name: 'Trae 实战', href: '#trae' },
    { name: 'Claude Code 实战', href: '#claudecode' },
    { name: '互动问答', href: '#assistant' },
    { name: '资源下载', href: '#resources', isButton: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
            <MonitorPlay className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            AI Tooling<span className="text-indigo-400">.Share</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all ${
                link.isButton
                  ? 'px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 hover:border-indigo-500/50'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-center py-3 rounded-lg ${
                link.isButton
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;