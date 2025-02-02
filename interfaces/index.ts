export interface Content {
  _id: string;
  type: 'text' | 'image' | 'youtube';
  title?: string;
  text?: string;
  source?: string;
}

export interface User {
  name: string;
  id: string;
  _id: string;
  isMoving: boolean;
  scores: number;
}

export interface Message {
  content: string;
  user: string;
}