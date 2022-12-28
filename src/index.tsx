import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/Navbar/Navbar';
import GameBoard from './Components/Gameboard/Gameboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <GameBoard/>
  </React.StrictMode>
);


