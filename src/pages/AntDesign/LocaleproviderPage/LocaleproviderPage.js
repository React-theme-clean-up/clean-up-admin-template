
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import LocaleproviderPageItems from 'components/AntDesign/LocaleproviderPage/index'

class LocaleproviderPage extends React.Component {
  static defaultProps = {
    pathName: 'Localeprovider',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Localeprovider" />
        <LocaleproviderPageItems />
      </Page>
    )
  }
}

export default LocaleproviderPage
