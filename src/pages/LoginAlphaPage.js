// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import LoginAlpha from 'components/Pages/LoginAlpha/LoginAlpha'

class LoginAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'Login Alpha',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Login Alpha" />
        <LoginAlpha />
      </Page>
    )
  }
}

export default LoginAlphaPage