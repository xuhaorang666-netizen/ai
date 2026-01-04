import React from 'react';
import { AgendaItem } from '../types';
import { ListChecks, MessageSquare, Zap, Terminal } from 'lucide-react';

const schedule: AgendaItem[] = [
  {
    time: 'Step 1',
    title: '背景与现状',
    speaker: '',
    description: '简要回顾团队当前的开发痛点，以及为什么我们需要引入 AI 编程工具。',
    type: 'keynote'
  },
  {
    time: 'Step 2',
    title: 'Cursor：行业新标准',
    speaker: '',
    description: '重点演示 Composer 多文件编辑模式与 Tab 预测功能。',
    type: 'workshop'
  },
  {
    time: 'Step 3',
    title: 'Trae：本土最强挑战者',
    speaker: '',
    description: '演示字节跳动出品的 AI IDE，重点看其中文理解能力与响应速度。',
    type: 'workshop'
  },
  {
    time: 'Step 4',
    title: 'Claude Code：未来的编程方式',
    speaker: '',
    description: '探索 CLI Agent 模式，看 AI 如何自主完成复杂的重构任务。',
    type: 'workshop'
  },
  {
    time: 'Step 5',
    title: '讨论与落地计划',
    speaker: '',
    description: '团队 Q&A，讨论如何在下个 Sprint 中试用这些工具。',
    type: 'break'
  }
];

const Agenda: React.FC = () => {
  return (
    <section id="agenda" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-indigo-600 rounded-xl">
            <ListChecks className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">会议流程</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {schedule.map((item, index) => (
            <div key={index} className="relative group">
              <div className="h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all hover:border-indigo-500/50">
                <div className="text-xs font-mono text-indigo-400 font-bold mb-3 uppercase tracking-wider">
                  {item.time}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl origin-left"></div>
              </div>
              {/* Connector line for desktop */}
              {index < schedule.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-slate-700 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;