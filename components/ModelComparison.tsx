import React, { useState } from 'react';
import { Sparkles, Zap, Brain, Palette } from 'lucide-react';

const models = [
  { name: 'DeepSeek', speed: 95, logic: 80, design: 84 },
  { name: 'Doubao', speed: 100, logic: 78, design: 88 },
  { name: 'Kimi', speed: 85, logic: 82, design: 72 },
  { name: 'GLM', speed: 82, logic: 88, design: 82 },
  { name: 'ChatGPT', speed: 75, logic: 100, design: 90 },
  { name: 'Claude', speed: 85, logic: 98, design: 85 },
  { name: 'Gemini', speed: 80, logic: 90, design: 100 },
];

const metrics = [
  { key: 'speed', name: '速度', color: 'from-blue-400 to-blue-600', icon: Zap, baseColor: '#3b82f6' },
  { key: 'logic', name: '逻辑能力', color: 'from-orange-400 to-orange-600', icon: Brain, baseColor: '#f97316' },
  { key: 'design', name: '前端审美', color: 'from-green-400 to-green-600', icon: Palette, baseColor: '#22c55e' },
];

const ModelComparison: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const maxHeight = 240;

  const sortedModels = React.useMemo(() => {
    if (!sortConfig) return models;
    return [...models].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a] as number;
      const bValue = b[sortConfig.key as keyof typeof b] as number;
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }, [sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key && current.direction === 'desc') {
        return null; // Reset
      }
      return {
        key,
        direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  return (
    <section id="models" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>性能大比拼</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">模型能力全方位对比</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            点击下方维度按钮可进行排序，悬停查看详细数据
          </p>
        </div>

        {/* 控制栏 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {metrics.map((m) => {
            const Icon = m.icon;
            const isActive = sortConfig?.key === m.key;
            return (
              <button
                key={m.key}
                onClick={() => handleSort(m.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? `bg-slate-800 border-${m.baseColor} ring-2 ring-${m.baseColor}/20 text-white`
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
                style={{ borderColor: isActive ? m.baseColor : undefined }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} style={{ color: isActive ? undefined : m.baseColor }} />
                <span>{m.name}</span>
                {isActive && (
                   <span className="text-xs ml-1 opacity-60">
                     {sortConfig.direction === 'asc' ? '↑' : '↓'}
                   </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 图表区域 */}
        <div className="max-w-6xl mx-auto bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 overflow-x-auto shadow-2xl">
          <div className="min-w-[800px] h-[320px] flex items-end justify-between gap-4 px-4">
            {sortedModels.map((model) => {
              const isHovered = hoveredModel === model.name;
              const isDimmed = hoveredModel !== null && !isHovered;

              return (
                <div
                  key={model.name}
                  className={`flex-1 flex flex-col items-center group transition-all duration-500 ease-out ${
                    isDimmed ? 'opacity-30 scale-95 blur-[1px]' : 'opacity-100'
                  } ${isHovered ? 'scale-105 z-10' : ''}`}
                  onMouseEnter={() => setHoveredModel(model.name)}
                  onMouseLeave={() => setHoveredModel(null)}
                >
                  <div className="relative w-full flex items-end justify-center gap-1 sm:gap-2 h-[260px]">
                    {metrics.map((metric) => {
                      const value = model[metric.key as keyof typeof model] as number;
                      const height = `${(value / 100) * 100}%`;
                      
                      return (
                        <div key={metric.key} className="relative flex-1 flex flex-col items-center h-full justify-end group/bar">
                          {/* 数值显示 - 常驻 */}
                          <span className={`mb-1 text-xs font-medium transition-colors duration-300 ${
                            isHovered ? 'text-white scale-110' : 'text-slate-400'
                          }`}>
                            {value}
                          </span>
                          
                          {/* 柱子 */}
                          <div
                            className={`w-full max-w-[24px] rounded-t-lg bg-gradient-to-t ${metric.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              height,
                              boxShadow: isHovered ? `0 0 20px ${metric.baseColor}40` : 'none'
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* 模型名称 */}
                  <div className="mt-4 text-center">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-slate-400'
                    }`}>
                      {model.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;
