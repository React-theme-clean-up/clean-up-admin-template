import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import IcomoonIcons from './IcomoonIcons'

class IcomoonIconsPage extends React.Component {
  static defaultProps = {
    pathName: 'Icomoon Icons',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Icomoon Icons" />
        <IcomoonIcons />
      </Page>
    )
  }
}

export default IcomoonIconsPage
