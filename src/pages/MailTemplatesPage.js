// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import MailTemplates from 'components/CleanComponents/MailTemplates/MailTemplates'

class MailTemplatesPage extends React.Component {
  static defaultProps = {
    pathName: 'Mail Templates',
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
