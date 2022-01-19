import React from 'react';
import ReactDOM from 'react-dom';
import {global} from './global/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {NotFound} from './pages/404';
import {Nav} from './components/Nav/Nav';
import {Counter} from './components/Counter/Counter';


ReactDOM.render(
  <BrowserRouter>
  <Nav />
    <Routes>
     <Route path="/quotes" element={<Home quotesDB={global.quotesDB} />} />  
     <Route path="/counter" element={<Counter />} />   
     <Route path="*" element={<NotFound />} />   
     </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

