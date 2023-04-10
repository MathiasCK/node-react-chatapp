import {FC} from 'react';
import {PrettyChatWindow} from 'react-chat-engine-pretty';
import {User} from '../../utils/types';

interface Props {
  user: User;
}

const ChatsPage: FC<Props> = ({user}) => (
  <div style={{height: '100vh'}}>
    <PrettyChatWindow
      projectId={import.meta.env.VITE_PROJECT_ID}
      username={user.username}
      secret={user.secret}
      style={{height: '100vh'}}
    />
  </div>
);
export default ChatsPage;
