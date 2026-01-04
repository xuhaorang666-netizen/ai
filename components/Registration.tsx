import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Registration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950/20">
      <div className="container mx-auto px-6">
        <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-slate-700 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              准备好升级你的<br/>开发工具库了吗？
            </h2>
            <p className="text-slate-300 text-lg">
              席位有限（仅限 50 人）。这不仅仅是一场会议，更是你职业生涯的加速器。
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span>独家工具配置手册 (PDF)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span>现场 1v1 指导机会</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span>加入高阶 AI 开发者社群</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[400px] bg-slate-900 p-8 rounded-2xl border border-slate-700">
            {submitted ? (
              <div className="h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">报名成功！</h3>
                <p className="text-slate-400">我们已将会议邀请函发送至您的邮箱。期待与您见面！</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-indigo-400 hover:text-indigo-300 underline"
                >
                  返回
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">立即报名</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">姓名</label>
                  <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="你的名字" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">工作邮箱</label>
                  <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">职位</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>前端开发工程师</option>
                    <option>后端开发工程师</option>
                    <option>全栈开发工程师</option>
                    <option>产品经理</option>
                    <option>技术总监 / CTO</option>
                    <option>其他</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-indigo-500/25 mt-2">
                  确认提交
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;