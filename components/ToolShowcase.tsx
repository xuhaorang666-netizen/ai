import React from 'react';
import { Link } from 'react-router-dom';
import { Command, Keyboard, Zap, FileCode2, MessagesSquare, Terminal } from 'lucide-react';

const ToolSlides: React.FC = () => {
  return (
    <div className="bg-slate-950">
      {/* ================= CURSOR SECTION ================= */}
      <section id="cursor" className="py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: Info */}
            <div className="flex-1 space-y-8 sticky top-32">
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm border border-blue-500/20 px-3 py-1 rounded bg-blue-500/10">
                <FileCode2 className="w-4 h-4" />
                IDE Fork (VS Code)
              </div>
              <Link to="/demo/cursor" className="text-4xl md:text-5xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer">Cursor</Link>
              <p className="text-xl text-slate-400 leading-relaxed">
                目前的行业标杆。通过 Fork VS Code 实现了最深度的 AI 集成。它的核心杀手锏是不仅能“写”代码，还能“改”整个项目。
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors group">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Keyboard className="w-5 h-5 text-blue-400" />
                    Cmd + K (Generate)
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    最常用的指令。在编辑器任意位置呼出，输入指令生成代码，或选中代码进行修改。
                  </p>
                  <div className="text-xs font-mono text-slate-500 bg-black/30 p-2 rounded border border-slate-800">
                    "Add error handling to this function"
                  </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors group">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    Composer (Cmd + I)
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    <span className="text-yellow-400 font-semibold">杀手级功能</span>。
                    浮动窗口模式，可以同时创建和修改多个文件。是开发完整 Feature 的最佳选择。
                  </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors group">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <MessagesSquare className="w-5 h-5 text-green-400" />
                    Chat (Cmd + L)
                  </h3>
                  <p className="text-slate-400 text-sm">
                    侧边栏对话。支持 <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">@Codebase</code> 索引整个项目，或者 <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-300">@Web</code> 联网搜索。
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Demo Placeholder */}
            <div className="flex-1 w-full">
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-[#1e1e1e] aspect-[4/3] group">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-[#3e3e3e]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-4 text-xs text-slate-400 font-sans">app.tsx — Cursor</span>
                </div>
                {/* Mock Code UI */}
                <div className="p-6 font-mono text-sm space-y-1 pt-12">
                   <div className="text-gray-500">{'// Press Cmd+K to generate'}</div>
                   <div className="flex items-center gap-2">
                      <div className="text-purple-400">function</div>
                      <div className="text-yellow-200">processData</div>
                      <div className="text-white">(data) {'{'}</div>
                   </div>
                   {/* AI Generation Overlay */}
                   <div className="mt-4 p-4 bg-[#2b2d31] rounded-lg border border-blue-500/30 shadow-xl max-w-md animate-pulse">
                      <div className="flex items-center gap-2 text-xs text-blue-300 mb-2 font-sans font-semibold">
                         <SparklesIcon className="w-3 h-3" />
                         Generating...
                      </div>
                      <div className="space-y-1 text-gray-300">
                        <div><span className="text-purple-400">const</span> cleaned = data.filter(Boolean);</div>
                        <div><span className="text-purple-400">return</span> cleaned.map(item {'=>'} item * <span className="text-orange-400">2</span>);</div>
                      </div>
                      <div className="mt-3 flex gap-2">
                         <div className="h-6 w-16 bg-blue-600 rounded text-[10px] flex items-center justify-center text-white">Accept</div>
                         <div className="h-6 w-16 bg-[#3e3e3e] rounded text-[10px] flex items-center justify-center text-gray-300">Reject</div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <h4 className="text-sm font-bold text-white mb-2">Pro Tip:</h4>
                <p className="text-sm text-slate-400">
                  在 Chat 中使用 <code className="text-indigo-300">@Docs</code> 可以直接引用官方文档（如 Next.js, Stripe），让 AI 学习最新的 API 写法。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAE SECTION ================= */}
      <section id="trae" className="py-24 border-b border-slate-800 relative overflow-hidden bg-slate-900/30">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            
            <div className="flex-1 space-y-8 sticky top-32">
              <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-sm border border-purple-500/20 px-3 py-1 rounded bg-purple-500/10">
                <Zap className="w-4 h-4" />
                Adaptive IDE (ByteDance)
              </div>
              <Link to="/demo/trae" className="text-4xl md:text-5xl font-bold text-white hover:text-purple-400 transition-colors cursor-pointer">Trae</Link>
              <p className="text-xl text-slate-400 leading-relaxed">
                字节跳动的诚意之作。主打“快”和“懂中文”。它的上下文管理非常智能，能自动感知你正在工作的相关文件，减少手动 @ 的麻烦。
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-800 rounded-lg text-purple-400 mt-1">
                    <MessagesSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Sidebar U 型交互</h3>
                    <p className="text-slate-400 text-sm">对话框设计更符合直觉，代码片段可以直接拖拽引用。</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-800 rounded-lg text-purple-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Smart Context</h3>
                    <p className="text-slate-400 text-sm">不必每次都手动添加文件，Trae 会根据你的光标位置和最近浏览自动推断上下文。</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-2 bg-slate-800 rounded-lg text-purple-400 mt-1">
                    <FileCode2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">中文优化</h3>
                    <p className="text-slate-400 text-sm">相比 Cursor，Trae 对中文提示词的理解更精准，生成的注释也更符合中文习惯。</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-full">
               <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-[#1e1e1e] aspect-[4/3]">
                 {/* Abstract UI for Trae */}
                 <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-1/3 border-r border-[#3e3e3e] bg-[#252526] p-4 flex flex-col">
                       <div className="text-xs text-slate-400 mb-4 font-bold">TRAE CHAT</div>
                       <div className="flex-1 space-y-4">
                          <div className="bg-[#3e3e3e] p-3 rounded-lg rounded-tl-none text-xs text-slate-200">
                             帮我分析一下 `User` 类的登录逻辑，看起来有点死锁问题。
                          </div>
                          <div className="bg-[#2d2d2d] border border-purple-500/30 p-3 rounded-lg rounded-tr-none text-xs text-slate-300">
                             <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold">
                                <SparklesIcon className="w-3 h-3" /> Analysis
                             </div>
                             我检测到 <code className="bg-black/30 p-0.5 rounded">auth.ts</code> 中存在竞态条件...
                          </div>
                       </div>
                    </div>
                    {/* Main Area */}
                    <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-sm text-gray-500">
                       {'// Code editor area...'}
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLAUDE CODE SECTION ================= */}
      <section id="claudecode" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <div className="inline-flex items-center gap-2 text-orange-400 font-mono text-sm border border-orange-500/20 px-3 py-1 rounded bg-orange-500/10 mb-6">
                <Terminal className="w-4 h-4" />
                CLI Agent (Anthropic)
              </div>
              <Link to="/demo/claude-code" className="text-4xl md:text-5xl font-bold text-white hover:text-orange-400 transition-colors cursor-pointer">Claude Code</Link>
              <p className="text-xl text-slate-400">
                真正的 Agent 形态。它没有 UI，活在终端里。
                你只需要给它下达模糊的任务，它会自动搜索文件、运行测试、修复 Bug，直到任务完成。
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
             <div className="bg-black rounded-xl border border-slate-800 shadow-2xl p-4 font-mono text-sm overflow-hidden min-h-[300px] flex flex-col">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="ml-2 text-slate-500">zsh — 80x24</span>
                </div>
                <div className="space-y-2 text-slate-300">
                   <div><span className="text-green-500">➜</span> <span className="text-blue-400">~</span> claude</div>
                   <div className="text-orange-400">Claude Code (Preview)</div>
                   <div>{'>'} <span className="animate-pulse">修复 tests/auth.test.ts 里的所有报错</span></div>
                   <div className="pt-2 text-slate-500">Thinking...</div>
                   <div className="pl-2 border-l-2 border-slate-700 text-slate-400">
                      <div>Running `npm test`... <span className="text-red-400">Failed</span></div>
                      <div>Reading `src/utils/auth.ts`...</div>
                      <div>Found bug in token validation logic.</div>
                      <div>Editing `src/utils/auth.ts`...</div>
                      <div>Running `npm test`... <span className="text-green-400">Passed</span></div>
                   </div>
                   <div className="text-green-400">Done! I've fixed the token logic and verified with tests.</div>
                </div>
             </div>

             <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">核心能力</h3>
                <div className="space-y-4">
                   <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="font-bold text-white mb-1">自主执行 (Agentic)</div>
                      <p className="text-slate-400 text-sm">不仅仅是生成代码，它能执行 Shell 命令。比如它可以自己跑 npm install，自己跑测试用例。</p>
                   </div>
                   <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="font-bold text-white mb-1">重构神器</div>
                      <p className="text-slate-400 text-sm">你可以说“把这个 Python 脚本重构为模块化的结构”，它会自己创建文件夹、移动文件、更新引用。</p>
                   </div>
                   <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="font-bold text-white mb-1">Token 开销</div>
                      <p className="text-slate-400 text-sm">注意：Claude Code 会消耗大量的 Token，因为它是全自动的 Agent 循环。企业版推荐配置限额。</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper icon
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default ToolSlides;