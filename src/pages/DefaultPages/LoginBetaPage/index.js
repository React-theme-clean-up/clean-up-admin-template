import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import LoginBeta from './LoginBeta'

class LoginBetaPage extends React.Component {
  static defaultProps = {
    pathName: 'Login Beta',
    roles: ['agent', 'administrator'],
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

export default LoginBetaPage
