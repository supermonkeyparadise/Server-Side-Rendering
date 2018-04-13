import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from './../actions';

class UsersList extends Component {
  componentWillMount() {
    console.log('@@ componentWillMount 被呼叫!!');
  }

  componentDidMount() {
    console.log('@@ componentDidMount 沒有被呼叫!!');
    this.props.fetchUsers();
  }

  renderUsers() {
    console.log('## this.props.users:', this.props.users);
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('## state 載入:');
  return {
    users: state.users
  };
};

const loadData = store => {
  // dispatch 的參數為 func，而不是 js obj ===> redux thunk 登場
  // return 一個 promise
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};
