// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// div 內，已經有資料了
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
