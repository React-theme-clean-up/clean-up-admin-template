import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import Documentation from './Documentation'

class DocumentationPage extends React.Component {
  static defaultProps = {
    pathName: 'Documentation',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Documentation" />
        <Documentation />
      </Page>
    )
  }
}

export default DocumentationPage
