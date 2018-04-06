// use common.js module require syntax
const express = require('express');
const React = require('react');

// 讓 ES2015 modules 可以和 common module 正常運作
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  // 目前 node 還沒有辦法解析 JSX to ES5
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
