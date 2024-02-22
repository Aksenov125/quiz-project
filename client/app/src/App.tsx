import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './features/Main/Main';

import QuizMainPage from './features/Quiz/components/QuizMainPage';
import Registration from './features/Auth/Components/Registration';
import Login from './features/Auth/Components/Login';




function App(): JSX.Element {

  return (
<Routes>
<Route path='/' element={<Main/>}>
<Route index element={<QuizMainPage/>}/>
 <Route path="/registration" element={<Registration />} />
 <Route path="/login" element={<Login />} />

</Route>

</Routes>

)

}

export default App;
