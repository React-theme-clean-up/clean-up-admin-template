import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import Register from './Register'

class RegisterPage extends React.Component {
  static defaultProps = {
    pathName: 'Register',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Register" />
        <Register />
      </Page>
    )
  }
}

export default RegisterPage
