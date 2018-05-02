import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import DividerItems from 'components/AntDesign/Divider/index'

class DividerPage extends React.Component {
  static defaultProps = {
    pathName: 'Divider',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Divider" />
        <DividerItems />
      </Page>
    )
  }
}

export default DividerPage
