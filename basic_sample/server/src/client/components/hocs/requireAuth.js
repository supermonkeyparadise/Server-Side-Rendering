import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          console.log('## 未登入');
          return <Redirect to="/" />;
        case null:
          console.log('## 登入中...');
          return <div>Loading...</div>;
        default:
          console.log('## 已登入...');
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProps)(RequireAuth);
};
