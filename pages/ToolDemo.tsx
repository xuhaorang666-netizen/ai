import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const toolInfo: Record<string, { name: string; color: string }> = {
  cursor: { name: 'Cursor', color: 'blue' },
  trae: { name: 'Trae', color: 'purple' },
  'claude-code': { name: 'Claude Code', color: 'orange' },
};

const ToolDemo: React.FC = () => {
  const { tool } = useParams<{ tool: string }>();
  const info = toolInfo[tool || ''] || { name: 'Unknown', color: 'gray' };

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      {/* 顶部导航 */}
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm flex-shrink-0">
        <div className="px-6 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>返回首页</span>
          </Link>
          <span className="text-slate-600">|</span>
          <h1 className={`text-xl font-bold text-${info.color}-400`}>{info.name} 实战演示</h1>
        </div>
      </div>
      {/* 空白区域 */}
      {/* 后续修改代码全在这里修改,其他地方不要动,完全独立,不受其他组件的样式代码影响*/}
      <div className="flex-1"></div>
    </div>
  );
};

export default ToolDemo;
