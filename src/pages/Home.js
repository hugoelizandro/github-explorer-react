import React, { Component } from 'react'
import Search from '../components/Search/Search'

class Home extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div>
        <Search {...this.props} />
      </div>
    )
  }
}

export default Home;