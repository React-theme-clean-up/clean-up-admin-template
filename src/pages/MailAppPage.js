// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import MailApp from 'components/Pages/MailApp/MailApp'

class MailAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Mail App',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Mail App" />
        <MailApp />
      </Page>
    )
  }
}

export default MailAppPage
