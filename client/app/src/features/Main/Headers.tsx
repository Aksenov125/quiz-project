import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import type { RootState } from '../../store/store';

function Headers(): JSX.Element {
  const user = useSelector((store: RootState) => store.authState.user);

  return (
    <ul className="menu-main">
     { user &&  <li>
        <NavLink to="">{`${user.name}: ${user.score}`}</NavLink>
      </li>}
      <li>
        <NavLink to="/score">ScoreTable</NavLink>
      </li>
      <li>
        <NavLink to="">Hello</NavLink>
      </li>
      <li>
        <NavLink to="/login">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Rega</NavLink>
      </li>
      <li>
        <NavLink to="/login">Loga</NavLink>
      </li>
    </ul>
  );
}
export default Headers;
