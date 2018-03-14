// @flow
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
  role: state.app.userState.role,
})

@connect(mapStateToProps)
class Footer extends React.Component {
  render() {
    return (
      <div className="cat__footer">
        <div className="cat__footer__top">
          <div className="row">
            <div className="col-lg-12">
              Clean ui footer top
            </div>
          </div>
        </div>
        <div className="cat__footer__bottom">
          <div className="row">
            <div className="col-lg-12">
              Clean ui footer bottom
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
