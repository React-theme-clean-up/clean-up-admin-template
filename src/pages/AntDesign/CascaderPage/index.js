import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CascaderItems from 'components/AntDesign/Cascader/index'

class CascaderPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
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
