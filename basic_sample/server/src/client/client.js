// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// 在執行 bundle.js 前， server 已經 rendering data to browser 了
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
