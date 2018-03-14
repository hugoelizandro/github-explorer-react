import React, { Component } from 'react'
import Moment from 'react-moment'
import userService from '../../services/user'

export default class UserRepoLastIssue extends Component {
  state = {
    repoLastIssue: {}
  }

  getUserData = (userRepo) => {
    this.setState({repoLastIssue: {}})
    
    userService.getUserRepoLastIssue(userRepo, repoLastIssue => {
      if (repoLastIssue !== 0) {
        this.setState({repoLastIssue})
      }
    }, error => {
      console.log('error', error)
    })
  }

  componentDidMount = () => {
    this.getUserData(this.props.userRepo)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.userRepo === nextProps.userRepo) {
      return
    }

    this.getUserData(nextProps.userRepo)
  }

  render() {
    const { repoLastIssue } = this.state
  
    return (
      <div>
        {repoLastIssue && repoLastIssue.id &&
          <div>
            <p>Última issue: { repoLastIssue.title }</p>
            <p>Data da última issue: <Moment format="DD/MM/YYYY">{ repoLastIssue.created_at }</Moment></p>
          </div>
        }
        {repoLastIssue && repoLastIssue.id && repoLastIssue.assignee &&
          <p>Usuário da última issue: { repoLastIssue.assignee.login }</p>
        }
      </div>
    )
  }
}
