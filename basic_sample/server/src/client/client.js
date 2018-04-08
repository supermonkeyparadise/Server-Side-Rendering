// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const routerJSX = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

// 在執行 bundle.js 前， server 已經 rendering data to browser 了
ReactDOM.hydrate(routerJSX, document.querySelector('#root'));
