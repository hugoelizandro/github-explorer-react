import React, { Component } from 'react'
import Search from '../components/Search/Search'
import NotFoundContent from '../components/NotFoundContent/NotFoundContent'

class NotFound extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div>
        <Search {...this.props} />
        <NotFoundContent {...this.props} />
      </div>
    );
  }
}

export default NotFound;