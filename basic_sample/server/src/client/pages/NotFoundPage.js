import React from 'react';

// 因為在 client 時，staticContext 不存在，所以不需給定初始值
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Ooops, route not found.</h1>;
};

export default {
  component: NotFoundPage
};
