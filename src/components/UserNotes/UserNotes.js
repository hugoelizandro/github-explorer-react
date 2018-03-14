import React, { Component } from 'react'
import st from './UserNotes.scss'

export default class UserNotes extends Component {
  state = {
    userNotes: ''
  }

  componentDidMount = () => {
    const cachedHits = localStorage.getItem(this.props.user);
    if (cachedHits) {
      this.setState({userNotes: cachedHits})
    }
  }

  handleChange = (event) => {
    localStorage.setItem(this.props.user, event.target.value)
    this.setState({userNotes: event.target.value})
  }

  render() {
    const { userNotes } = this.state
  
    return (
      <div className={st.core}>
        <div className={st.notesBox}>
          <h3>
            Anotações 
          </h3>
          
          <div className="form-group">
            <textarea 
              value={userNotes}
              onChange={this.handleChange}
              placeholder={`Digite algo sobre o usuário ${this.props.user} (salvo automaticamente)`}
              rows="4" 
              className="form-control">
            </textarea>
          </div>

        </div>
      </div>
    )
  }
}
