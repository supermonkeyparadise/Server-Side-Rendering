// use common.js module require syntax
// const express = require('express');
// const React = require('react');

// 讓 ES2015 modules 可以和 common module 正常運作
// const renderToString = require('react-dom/server').renderToString;
// export default
// const Home = require('./client/components/Home').default;

import 'babel-polyfill'; // async await
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log('## 收到 req!!', req.path)
  const store = createStore();

  // Some logic to initialize
  // and load data into store

  // Step1: figure out what component would have rendered
  // console.log(matchRoutes(Routes, req.path));
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log('@@ trace 1')
  // 當所有 request 都回來了，才做解析
  // 這裡也表示 reducer 都更新完畢了！！
  Promise.all(promises).then(() => {
    // 到這邊為止，只是更新 reducer 的資料
    console.log('@@ trace 2')

    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
