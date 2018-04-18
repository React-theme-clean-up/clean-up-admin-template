// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Utilities from './Utilities'

class UtilitiesPage extends React.Component {
  static defaultProps = {
    pathName: 'Utilities',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Utilities" />
        <Utilities />
      </Page>
    )
  }
}

export default UtilitiesPage
