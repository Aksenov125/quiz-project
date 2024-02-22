import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './features/Main/Main';
import QuizMainPage from './features/Quiz/components/QuizMainPage';




function App(): JSX.Element {

  return (
<Routes>
<Route path='/' element={<Main/>}>
<Route index element={<QuizMainPage/>}/>

</Route>

</Routes>

)
}

export default App;
