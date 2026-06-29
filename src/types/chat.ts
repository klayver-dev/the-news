export interface Reply {
  name: string;
  text: string;
}

export interface Message {
  id: number;
  name: string;
  color: string;
  text: string;
  time: string;
  isOwn: boolean;
  reply?: Reply;
}
