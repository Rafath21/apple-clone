import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BagState from "./context/bag/BagState";
ReactDOM.render(
  <BagState>
    <App />

  </BagState>
    ,
  document.getElementById('root')
);