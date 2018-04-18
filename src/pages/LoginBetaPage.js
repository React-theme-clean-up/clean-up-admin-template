// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import LoginBeta from 'components/Pages/LoginBeta/LoginBeta'

class LoginAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'Login Beta',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Login Beta" />
        <LoginBeta />
      </Page>
    )
  }
}

export default LoginAlphaPage
