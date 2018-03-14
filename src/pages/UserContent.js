import React, { Component } from 'react'
import Search from '../components/Search/Search'
import UserContent from '../components/UserContent/UserContent'

class User extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div>
        <Search {...this.props} />
        <UserContent {...this.props} user={this.props.match.params.user} />
      </div>
    );
  }
}

export default User;