export interface Tool {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  demoCommand?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  type: 'keynote' | 'workshop' | 'break';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
