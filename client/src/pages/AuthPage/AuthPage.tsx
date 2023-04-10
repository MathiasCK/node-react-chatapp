import {FC} from 'react';
import {User} from '../../utils/types';

interface Props {
  onAuth: (user: User) => void;
}

const AuthPage: FC<Props> = ({onAuth}) => {
  const onSubmit = async (e: React.ChangeEvent<any>) => {
    try {
      e.preventDefault();
      const {value} = e.target[0];
      const response = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: value,
        }),
      });

      const data = await response.json();
      onAuth({...data, secret: value});
    } catch (e) {
      // @ts-ignore
      throw new Error(e.message);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
