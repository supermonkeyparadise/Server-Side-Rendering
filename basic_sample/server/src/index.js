// use common.js module require syntax
// const express = require('express');
// const React = require('react');

// 讓 ES2015 modules 可以和 common module 正常運作
// const renderToString = require('react-dom/server').renderToString;
// export default
// const Home = require('./client/components/Home').default;

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  // client 自行 download bundle.js
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
