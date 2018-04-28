import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import C3Items from './C3'

class C3Page extends React.Component {
  static defaultProps = {
    pathName: 'C3.js',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - C3.js" />
        <C3Items />
      </Page>
    )
  }
}

export default C3Page
