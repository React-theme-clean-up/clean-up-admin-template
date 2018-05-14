import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import CascaderItems from 'components/AntComponents/Cascader/index'

class CascaderPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <CascaderItems />
      </Page>
    )
  }
}

export default CascaderPage
