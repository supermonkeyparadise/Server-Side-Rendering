// Startup point for the client side application
import 'babel-polyfill'; // async await
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import axios from 'axios';

import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

const routerJSX = (
  // 當 redux store change，Provider 會通知有 connect 的 component，讓它們重新 render
  <Provider store={store}>
    <BrowserRouter>
      {/* <Routes /> */}
      {/* renderRoutes 將 array 轉換為 route component */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);

// 在執行 bundle.js 前， server 已經 rendering data to browser 了
ReactDOM.hydrate(routerJSX, document.querySelector('#root'));
