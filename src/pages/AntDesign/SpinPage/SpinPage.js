import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import SpinPageItems from 'components/AntDesign/SpinPage/index'

class SpinPage extends React.Component {
  static defaultProps = {
    pathName: 'Spin',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Spin" />
        <SpinPageItems />
      </Page>
    )
  }
}

export default SpinPage
