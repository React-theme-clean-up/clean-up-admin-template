import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MailTemplates from 'components/Clean/MailTemplates'

class MailTemplatesPage extends React.Component {
  static defaultProps = {
    pathName: 'Mail Templates',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Mail Templates" />
        <MailTemplates />
      </Page>
    )
  }
}

export default MailTemplatesPage
