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
  return {
    users: state.users
  };
};

const loadData = () => {
  console.log('Im trying to load some data');
};

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);
