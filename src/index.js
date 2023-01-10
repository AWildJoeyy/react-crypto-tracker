import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './Pages/Coin';
import Homepage from './Pages/Homepage';
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/:id" element={<Coin />}/>


    </Routes>
    </BrowserRouter>
);

 