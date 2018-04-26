import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import LocaleproviderItems from 'components/AntDesign/Localeprovider/index'

class LocaleproviderPage extends React.Component {
  static defaultProps = {
    pathName: 'Localeprovider',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Localeprovider" />
        <LocaleproviderItems />
      </Page>
    )
  }
}

export default LocaleproviderPage
