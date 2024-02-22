import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../api';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .loginFetch({ email, password })
      .then((data) => {
        if (data.message === 'confirm') {
          dispatch({ type: 'auth/login', payload: data });
        }
      })
      .catch(console.log);
  };
  return (
    <div>
      <form className="loginform" onSubmit={login}>
        <input
          type="text"
          value={email}
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <div className="errLogin_message" />
    </div>
  );
}

export default Login;
