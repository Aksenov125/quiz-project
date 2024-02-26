import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './features/Main/Main';
import QuizMainPage from './features/Quiz/components/QuizMainPage';
import Registration from './features/Auth/Components/Registration';
import Login from './features/Auth/Components/Login';
import * as api from './features/Auth/api';
import IncorrectPage from './features/Incorrect/IncorrectPage';
import ScoreTable from './features/ScoreTable/components/ScoreTable';


function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .userfetch()
      .then((data) => dispatch({ type: 'aut/users', payload: data }))
      .catch(console.log);
  }, []);


  

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<QuizMainPage />} />
        <Route path="/score" element={<ScoreTable />} />
        <Route path="/regestration" element={<Login />} />
        <Route path="/login" element={<Registration />}  />
        <Route path="*" element={<IncorrectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
