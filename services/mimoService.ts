const apiKey = import.meta.env.VITE_MIMO_API_KEY || '';
// 开发环境用 Vite 代理，生产环境用 Vercel serverless function
const API_URL = import.meta.env.DEV 
  ? '/api/mimo/v1/chat/completions' 
  : '/api/mimo';

const SYSTEM_INSTRUCTION = `
你现在是一位产品经理的智能演示助手，正在一场内部技术分享会上协助主讲人。
会议主题是：介绍 AI 编程工具（Cursor, Trae, Claude Code）及其使用方法。

你的职责是：
1. **补充技术细节**：当主讲人（用户）或听众询问某个工具的具体用法时，提供详细的快捷键、操作步骤或代码示例。
2. **对比分析**：客观分析这三款工具的优劣势，帮助团队选择适合的工具。
3. **风格设定**：
   - 语言：中文。
   - 语气：专业、干练、并在适当时候幽默一下（比如吐槽一下以前写重复代码的痛苦）。
   - 格式：使用 Markdown 格式，关键快捷键用加粗或代码块标出。

知识库重点：
- **Cursor**: 强调 \`Cmd+K\` (Generate), \`Cmd+L\` (Chat), \`Composer\` (多文件编辑, \`Cmd+I\`), 以及 \`Tab\` 键的强大预测能力。
- **Trae**: 强调字节跳动出品，中文友好，Side Bar 的 U 型交互，以及 \`Smart Context\` (智能上下文)。
- **Claude Code**: 强调它是 CLI 工具，在终端运行 (\`claude\`)，擅长自主执行任务、文件操作和重构，是"Agent"形态的代表。

如果被问到与编程工具无关的问题，请幽默地把话题拉回到"如何用 AI 少加班"上来。
`;

interface MiMoMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface MiMoResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const sendMessageToMiMo = async (message: string): Promise<string> => {
  // 开发环境需要本地 API Key，生产环境由服务端处理
  if (import.meta.env.DEV && !apiKey) {
    return "演示模式：API Key 未配置，无法连接 AI 助教。";
  }

  const messages: MiMoMessage[] = [
    { role: 'system', content: SYSTEM_INSTRUCTION },
    { role: 'user', content: message }
  ];

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  // 开发环境需要传递 Authorization
  if (import.meta.env.DEV && apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: 'mimo-v2-flash',
        messages: messages,
      })
    });

    if (!response.ok) {
      throw new Error(`API 请求失败: ${response.status}`);
    }

    const data: MiMoResponse = await response.json();
    return data.choices?.[0]?.message?.content || "AI 助教正在思考中，请稍候...";
  } catch (error) {
    console.error("MiMo API Error:", error);
    return "演示现场网络波动，AI 助教暂时断线。";
  }
};
