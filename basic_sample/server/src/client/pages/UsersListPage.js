import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from './../actions';

class UsersList extends Component {
  componentWillMount() {
    console.log('## componentWillMount 被呼叫!!');
  }

  // ＊＊有存在的必要，要考慮到 router 的切換＊＊
  componentDidMount() {
    console.log('## componentDidMount 沒有被呼叫!!');
    this.props.fetchUsers();
  }

  renderUsers() {
    console.log('## this.props.users:', this.props.users);
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      // react-helmet
      <Helmet>
        <title>{`${this.props.users.length} Users Loads`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
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
