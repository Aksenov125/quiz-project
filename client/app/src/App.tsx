import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './features/Main/Main';



function App(): JSX.Element {

  
  return (
<Routes>
<Route path='/' element={<Main/>} />

</Routes>

)
}

export default App;
