
import React from 'react'
import LoginForm from './LoginForm'

class Login extends React.Component {
  state = {}

  render() {
    return (
      <div className="cat__pages__login cat__pages__login--fullscreen">
        <div className="cat__pages__login__header">
          <div className="row">
            <div className="col-lg-8">
              <div className="cat__pages__login__header__logo">
                <a href="/">
                  <strong>Clean UI</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__pages__login__block">
          <div className="row">
            <div className="col-xl-12">
              <div className="cat__pages__login__block__promo text-white text-center">
                <h1 className="mb-3 text-white">
                  <strong>WELCOME TO CLEAN UI</strong>
                </h1>
              </div>
              <div className="cat__pages__login__block__inner">
                <LoginForm email={this.state.restoredEmail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
