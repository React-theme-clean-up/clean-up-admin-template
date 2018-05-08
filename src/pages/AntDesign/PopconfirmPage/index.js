import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PopconfirmItems from 'components/AntDesign/Popconfirm/index'

class PopconfirmPage extends React.Component {
  static defaultProps = {
    pathName: 'Popconfirm',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Popconfirm" />
        <PopconfirmItems />
      </Page>
    )
  }
}

export default PopconfirmPage
