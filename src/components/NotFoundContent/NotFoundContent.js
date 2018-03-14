import React, { Component } from 'react'
import st from './NotFoundContent.scss'

export default class NotFoundContent extends Component {
  render() {
    return (
      <div className={st.core}>
        <div className="container">
          <div className={st.wrapper}>
            <div className={st.heading}>
              <h1>
                Página não encontrada
              </h1>
              <p>Tente buscar por um usuário</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
