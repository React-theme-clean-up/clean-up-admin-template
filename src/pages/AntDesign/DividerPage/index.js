import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import DividerItems from 'components/AntComponents/Divider/index'

class DividerPage extends React.Component {
  static defaultProps = {
    pathName: 'Divider',
    roles: ['agent', 'administrator'],
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
