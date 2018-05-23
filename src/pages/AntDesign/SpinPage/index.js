import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SpinItems from 'components/AntComponents/Spin/index'

class SpinPage extends React.Component {
  static defaultProps = {
    pathName: 'Spin',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Spin" />
        <SpinItems />
      </Page>
    )
  }
}

export default SpinPage
