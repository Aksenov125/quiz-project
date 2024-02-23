import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';
import './auth.css';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigator = useNavigate();

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .loginFetch({ email, password })
      .then((data) => {
        if (data.message === 'confirm') {
          dispatch({ type: 'auth/login', payload: data });
          navigator('/');
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
          type="password"
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
