// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import PopconfirmPageItems from 'components/AntComponents/PopconfirmPage/index'

class PopconfirmPage extends React.Component {
  static defaultProps = {
    pathName: 'Popconfirm',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Popconfirm" />
        <PopconfirmPageItems />
      </Page>
    )
  }
}

export default PopconfirmPage
