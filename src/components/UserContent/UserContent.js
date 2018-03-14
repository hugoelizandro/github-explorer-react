import React, { Component } from 'react'
import Moment from 'react-moment'
import userService from '../../services/user'
import UserRepoLastIssue from '../UserRepoLastIssue/UserRepoLastIssue'
import UserNotes from '../UserNotes/UserNotes'
import st from './UserContent.scss'

export default class UserContent extends Component {
  state = {
    user: null,
    userRepos: [],
    currentPage: 1,
    perPage: 3,
    loading: true
  }

  getUserData = (user) => {
    this.setState({user: null, currentPage: 1, loading: true})

    userService.getUser(user, user => {
      this.setState({user})

      if (user.login) {
        userService.getUserRepos(user.login, userRepos => {
          this.setState({userRepos, loading: false})
        }, error => {
          this.setState({loading: false})
          console.log('error', error)
        })
      }
    }, error => {
      this.setState({user: null, loading: false})
      console.log('error', error)
    })
  }

  componentDidMount = () => {
    this.getUserData(this.props.user)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.user === nextProps.user) {
      return
    }

    this.getUserData(nextProps.user)
  }

  handleClick = (page) => () => {
    this.setState({
      currentPage: page
    });
  }

  render() {
    const { user, userRepos, currentPage, perPage, loading } = this.state

    const indexOfLast = currentPage * perPage
    const indexOfFirst = indexOfLast - perPage
    const current = userRepos.slice(indexOfFirst, indexOfLast);
    
    return (
      <div className={st.core}>
        <div className="container">
          {loading && !user &&
            <h3 className={st.title}>Carregando...</h3>
          }
          {!loading && !user &&
            <h3 className={st.title}>Erro 404. Usuário não encontrado</h3>
          }
          {!loading && user &&
            <div className="row">
              <div className="col-md-4">
                <div className={st.profileBox}>
                  <div className={st.cardBlock}>
                    <div className={st.imgBlock}>
                      <img src={user.avatar_url} alt={user.login} />
                    </div>
                    <h3>{ user.login }</h3>
                    <div className={st.infoBlock}>
                      <p>Criado em: <Moment format="DD/MM/YYYY">{ user.created_at }</Moment></p>
                      {user.location &&
                        <p>Localização: { user.location }</p>
                      }
                      <p>Repositórios públicos: { user.public_repos }</p>
                      <p>Seguidores: { user.followers }</p>
                      <p>Seguindo: { user.following }</p>
                      <a href={user.html_url} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Ver no GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className={st.bucketsBox}>
                  <h3>Repositórios</h3>
                  
                  {userRepos.length > 0 &&
                    current.map((userRepo, index) => (
                      <div className={st.bucketBlock} key={index}>
                        <p>Nome: { userRepo.name }</p>
                        <p>Criado em: <Moment format="DD/MM/YYYY">{ userRepo.created_at }</Moment></p>
                        <p>Link: <a href={userRepo.html_url} rel="noopener noreferrer" target="_blank">ver no GitHub</a></p>
                        {userRepo.description &&
                          <p>Descrição: { userRepo.description }</p>
                        }
                        {userRepo.has_issues &&
                          <UserRepoLastIssue userRepo={ `${user.login}/${userRepo.name}` } />
                        }
                      </div>
                    ))
                  }
                  <ul className={st.paginateLinks}>
                    {indexOfFirst > 0 &&
                      <li className={st.prev} onClick={this.handleClick(currentPage - 1)}>
                        <a>Anterior</a>
                      </li>
                    }
                    {indexOfLast < userRepos.length &&
                      <li className={st.next} onClick={this.handleClick(currentPage + 1)}>
                        <a>Próximo</a>
                      </li>
                    }
                  </ul>
                
                </div>
                <UserNotes user={user.login} />
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
