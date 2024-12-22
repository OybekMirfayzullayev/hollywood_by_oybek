import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/main.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Actors from './components/Actors.jsx'
import Films from './pages/Films.jsx';
import Error from './pages/Error.jsx';
import Actorinfo from './pages/Actorinfo.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Actors/>}/>
          <Route path='/films' element={<Films/>}/>
          <Route path='/actor_information/:actor_Id' element={<Actorinfo/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
