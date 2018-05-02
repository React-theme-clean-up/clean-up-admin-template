import React from 'react'
import LoginForm from './LoginForm'
import './style.css'

class Login extends React.Component {
  state = {}

  render() {
    return (
      <div className="login login--fullscreen" style={{ backgroundImage: 'url(resources/images/login/4.jpg)' }}>
        <div className="login__header">
          <div className="row">
            <div className="col-lg-12">
              <div className="login__header__logo">
                <a href="javascript: void(0);">
                  <img
                    src="resources/images/login/logo-inverse.png"
                    alt="Clean UI Admin Template"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login__block pb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__promo text-white text-center">
                <h1 className="mb-3 text-white">
                  <strong>WELCOME TO CLEAN UI ADMIN TEMPLATE</strong>
                </h1>
              </div>
              <div className="login__block__inner">
                <div className="login__block__form">
                  <LoginForm email={this.state.restoredEmail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
