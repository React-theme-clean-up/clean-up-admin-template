// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import SwitchPageItems from 'components/AntComponents/SwitchPage/index'

class SwitchPage extends React.Component {
  static defaultProps = {
    pathName: 'Switch',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Switch" />
        <SwitchPageItems />
      </Page>
    )
  }
}

export default SwitchPage
