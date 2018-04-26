
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Login from './Login'

class LoginPage extends React.Component {
  render() {
    const { match, ...props } = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Login" />
        <Login match={match} />
      </Page>
    )
  }
}

export default LoginPage
