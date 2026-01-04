import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2">
              NextGen<span className="text-indigo-400">Code</span>
            </div>
            <p className="text-slate-500 text-sm">
              赋能开发者，拥抱 AI 编程新范式。
            </p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; 2024 AI Coding Summit. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">隐私政策</a>
            <a href="#" className="hover:text-slate-400">服务条款</a>
            <a href="#" className="hover:text-slate-400">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;