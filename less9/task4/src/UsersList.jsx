import React, { Component } from 'react';
import User from './User';
import './index.scss';
import Filter from './Filter';

class UsersList extends Component {
  state = {
// users: this.props.users,
// count: this.props.users.length,
// filterText: '',
   value: '',
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const usersList = this.props.users.filter(user => {
      if (user.name.toLowerCase().includes(this.state.value.toLowerCase())) {
        return user;
      }
    });

    return (
      <div>
        <Filter 
        filterText={this.state.value} 
        count={usersList.length} 
        onChange={this.onChange} 
        />
        <ul className="users">
          {usersList.map(users => (
            <User key={users.id} {...users} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
