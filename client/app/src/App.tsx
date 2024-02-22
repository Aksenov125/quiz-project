import React from 'react';

import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Main from './features/Main/Main';

function App(): JSX.Element {
  const dispatch = useDispatch()  
  
  return (
<Routes>
<Route path='/' element={<Main/>}>


</Route>

</Routes>

)
}

export default App;
