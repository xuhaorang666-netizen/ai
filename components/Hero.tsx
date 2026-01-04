import React from 'react';
import { ChevronDown, Terminal, Zap, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-600/10 blur-[100px] rounded-full -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mx-auto">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            内部技术分享会 2024
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            AI 编程工具 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">
              实战与落地指南
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            今天我们不聊虚的概念，只看工具怎么用。
            <br/>
            深入解析 <strong className="text-slate-200">Cursor</strong>、<strong className="text-slate-200">Trae</strong> 和 <strong className="text-slate-200">Claude Code</strong> 的核心工作流。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#cursor"
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              开始演示
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-200">Editor</h3>
              </div>
              <p className="text-sm text-slate-500">Cursor & Trae 的 IDE 集成体验与快捷键技巧。</p>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-200">Agent</h3>
              </div>
              <p className="text-sm text-slate-500">Claude Code 的终端自主代理能力演示。</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
               <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-200">Impact</h3>
              </div>
              <p className="text-sm text-slate-500">从 Coding 到 Review 的全流程效能提升。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;