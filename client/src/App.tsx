import {useState} from 'react';
import {AuthPage, ChatsPage} from './pages';

import './App.css';
import {User} from './utils/types';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <AuthPage onAuth={user => setUser(user)} />;
  }
  return <ChatsPage user={user} />;
};

export default App;
