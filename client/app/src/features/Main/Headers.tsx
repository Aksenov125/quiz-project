import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import * as api from '../Auth/api'

function Headers(): JSX.Element {
  const user = useSelector((store: RootState) => store.authState.user);
  const navigation = useNavigate()

  const dispatch = useDispatch()



  const logoufunc = ():void=> {
    api.logoutfetch().then(data => {
      if(data.message === 'ok'){
        dispatch({type:'auth/logout'})
        localStorage.clear();
        navigation('/login')
      }
    }).catch(console.log)
  }

  return (
    <ul className="menu-main">
     { user &&  <li>
        <NavLink to="" className='nav-user-data'>{`${user.name}: ${user.score}`}</NavLink>
      </li>}
      <li>
        <NavLink to="/score">ScoreTable</NavLink>
      </li>
      {user ? 
      <li>
        <NavLink onClick={logoufunc} to='/'>Выйти</NavLink>
      </li> :
      <>
      <li>
        <NavLink to="/registration">Создать аккаунт</NavLink>
      </li>
      <li>
        <NavLink to="/login">Войти</NavLink>
      </li>
      </>}
    </ul>
  );
}
export default Headers;
