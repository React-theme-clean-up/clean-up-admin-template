// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import CascaderPageItems from 'components/AntComponents/CascaderPage/index'

class CascaderPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <CascaderPageItems />
      </Page>
    )
  }
}

export default CascaderPage
