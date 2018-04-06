// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import Lockscreen from 'components/Pages/Lockscreen/Lockscreen'

class LoginAlphaPage extends React.Component {
  static defaultProps = {
    pathName: 'Lockscreen',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Lockscreen" />
        <Lockscreen />
      </Page>
    )
  }
}

export default LoginAlphaPage
