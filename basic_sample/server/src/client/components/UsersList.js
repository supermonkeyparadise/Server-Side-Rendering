import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from './../actions';

class UsersList extends Component {
  componentDidMount() {
    // this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    <div>
      Here's a big list of users
      <ul>{this.renderUsers()}</ul>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connent(mapStateToProps, { fetchUsers })(UsersList);
