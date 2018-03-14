// @flow
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
  isHideLogin: state.app.isHideLogin,
})

@connect(mapStateToProps)
class HideLogin extends React.Component {
  render() {
    const { isHideLogin } = this.props
    if (!isHideLogin) return null
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
            <div className="col-lg-4"> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HideLogin
