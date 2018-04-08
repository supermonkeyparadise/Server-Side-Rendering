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
  const store = createStore();

  // Some logic to initialize
  // and load data into store

  // Step1: figure out what component would have rendered
  // console.log(matchRoutes(Routes, req.path));
  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
