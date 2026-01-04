import React from 'react';
import { Download, ExternalLink, BookOpen } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-slate-700 shadow-2xl max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              开始行动
            </h2>
            <p className="text-slate-400 text-lg">
              不要等待未来，现在就安装它们。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cursor */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-2">Cursor</h3>
               <p className="text-slate-400 text-sm mb-6">适合绝大多数开发者的首选</p>
               <div className="space-y-3 w-full">
                 <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <Download className="w-4 h-4" /> 下载 Mac/Win 版
                 </button>
                 <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <BookOpen className="w-4 h-4" /> 官方文档
                 </button>
               </div>
            </div>

            {/* Trae */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-purple-500 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-2">Trae</h3>
               <p className="text-slate-400 text-sm mb-6">字节跳动出品，完全免费（目前）</p>
               <div className="space-y-3 w-full">
                 <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <Download className="w-4 h-4" /> 下载 IDE
                 </button>
                 <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <ExternalLink className="w-4 h-4" /> 访问官网
                 </button>
               </div>
            </div>

            {/* Claude Code */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-orange-500 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-2">Claude Code</h3>
               <p className="text-slate-400 text-sm mb-6">需申请 Research Preview 权限</p>
               <div className="space-y-3 w-full">
                 <div className="p-3 bg-black rounded border border-slate-800 font-mono text-xs text-green-400 mb-2">
                    npm install -g @anthropic-ai/claude-code
                 </div>
                 <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    <BookOpen className="w-4 h-4" /> 查看 Readme
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resources;