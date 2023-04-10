export interface User {
  avatar: string | null;
  created: string;
  custom_json: any;
  email: string;
  first_name: 'mathias';
  id: number;
  is_authenticated: boolean;
  is_online: boolean;
  last_message: Message;
  last_name: string;
  secret: string;
  username: string;
}

export interface Message {
  text: string;
  created: string;
  attachments: any[];
}
