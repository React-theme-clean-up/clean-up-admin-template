import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import SwitchItems from 'components/AntDesign/Switch/index'

class SwitchPage extends React.Component {
  static defaultProps = {
    pathName: 'Switch',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Switch" />
        <SwitchItems />
      </Page>
    )
  }
}

export default SwitchPage
