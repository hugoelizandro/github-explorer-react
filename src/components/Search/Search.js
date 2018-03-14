import React, { Component } from 'react'
import st from './Search.scss'

export default class Search extends Component {
  state = {
    user: null,
    formData: {
      user: ''
    },
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { formData } = this.state

    if (!formData.user) {
      return
    }

    this.props.history.push(`/${formData.user}`)
  }

  handleChange = (event) => {
    const { formData } = this.state
    formData.user = event.target.value
    this.setState({formData})
  }

  render() {
    const { formData } = this.state

    return (
      <div className={st.core}>
        <div className={st.intro}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <div className={st.introCore}>
                  <ul className="vertical-center">
                    <li className="child">
                      <div className={st.searchBox}>
                        <h1>Procure por usuário no GitHub</h1>
                        <form onSubmit={this.handleSubmit}>
                          <div className="input-group">
                            <input value={formData.user} onChange={this.handleChange} placeholder="Nome do usuário" className="form-control" />
                            <span className="input-group-btn"><button type="submit" className="btn btn-primary">Buscar</button></span>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
