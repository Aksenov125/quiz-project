import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Main from './features/Main/Main';
import QuizMainPage from './features/Quiz/components/QuizMainPage';
import Registration from './features/Auth/Components/Registration';
import Login from './features/Auth/Components/Login';
import * as api from "./features/Auth/api"
import IncorrectPage from './features/Incorrect/IncorrectPage';
import { RootState } from './store/store';

function App(): JSX.Element {
  const dispatch = useDispatch()

  useEffect(() => {
    api.userfetch().then(data => dispatch({type: 'auth/user', payload:data})).catch(console.log)
  },[])

  return (
    <Routes>
    <Route path='/' element={<Main />}>
    <Route index element={<QuizMainPage  />}/>
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path='*' element={<IncorrectPage />}/>
    </Route>
    </Routes>
  )
}

export default App;
