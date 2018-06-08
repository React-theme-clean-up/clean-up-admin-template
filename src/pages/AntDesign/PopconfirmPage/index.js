import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import PopconfirmItems from 'components/AntComponents/Popconfirm/index'

class PopconfirmPage extends React.Component {
  static defaultProps = {
    pathName: 'Popconfirm',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Popconfirm" />
        <PopconfirmItems />
      </Page>
    )
  }
}

export default PopconfirmPage
