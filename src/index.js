import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projects from './components/Projects';
import Profile from './components/Profile';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sign_in from './components/Sign_in';
import Register from './components/Register';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sign_in/>}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/home/:id" element={<App/>}>
        <Route path="wel" element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
