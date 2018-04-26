
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MailList from './MailList'

class MailAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Mail App',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Mail App" />
        <MailList />
      </Page>
    )
  }
}

export default MailAppPage
