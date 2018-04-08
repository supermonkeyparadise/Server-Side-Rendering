// use common.js module require syntax
// const express = require('express');
// const React = require('react');

// 讓 ES2015 modules 可以和 common module 正常運作
// const renderToString = require('react-dom/server').renderToString;
// export default
// const Home = require('./client/components/Home').default;

import express from 'express';
import renderer from './helpers/renderer';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
