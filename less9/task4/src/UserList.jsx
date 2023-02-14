import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UserList extends Component {
  state = {
    users: '',
    value: '',
    filterText: '',
  };

  handleChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const usersList = users => {
      users.filter(user => {
        if (user.name.toLowerCase.includes(this.state.value.toLowerCase())) {
          return user;
        }
      });
    };

    return (
      <div>
        <Filter onChange={this.handleChange} count={usersList.length} />


        <ul className='users'>
        {usersList.map(users => (
          <User key={users.id} {...users} />
        ))}
</ul>

      </div>
    );
  }
}

export default UserList;
