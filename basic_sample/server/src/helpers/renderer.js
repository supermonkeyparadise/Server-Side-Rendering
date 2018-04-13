import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from './../client/Routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {/* <Routes /> */}
        {/* renderRoutes 將 array 轉換為 route component */}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // There is no time allowed for completing the data request.
  // 在 SSR 根本不會呼叫 componentDidMount method

  // client 自行 download bundle.js
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
