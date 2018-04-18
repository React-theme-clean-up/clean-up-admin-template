import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import GalleryApp from './GalleryApp'

class GalleryAppPage extends React.Component {
  static defaultProps = {
    pathName: 'Gallery',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Gallery" />
        <GalleryApp />
      </Page>
    )
  }
}

export default GalleryAppPage
