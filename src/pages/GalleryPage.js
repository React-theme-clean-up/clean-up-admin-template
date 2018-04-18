import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Gallery from 'components/Pages/Gallery/Gallery'

class GalleryPage extends React.Component {
  static defaultProps = {
    pathName: 'Gallery',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Gallery" />
        <Gallery />
      </Page>
    )
  }
}

export default GalleryPage
