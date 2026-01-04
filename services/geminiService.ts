import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

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
- **Claude Code**: 强调它是 CLI 工具，在终端运行 (\`claude\`)，擅长自主执行任务、文件操作和重构，是“Agent”形态的代表。

如果被问到与编程工具无关的问题，请幽默地把话题拉回到“如何用 AI 少加班”上来。
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "演示模式：API Key 未配置，无法连接 AI 助教。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "AI 助教正在思考中，请稍候...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "演示现场网络波动，AI 助教暂时断线。";
  }
};