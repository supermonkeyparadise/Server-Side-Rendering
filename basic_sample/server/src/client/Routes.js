import React from 'react';
// import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

// ** react-router-config **
// for SSR
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
