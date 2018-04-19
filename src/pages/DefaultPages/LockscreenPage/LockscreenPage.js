// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Lockscreen from './Lockscreen'

class LockscreenPage extends React.Component {
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

export default LockscreenPage
