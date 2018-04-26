import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import UploadPageItems from 'components/AntDesign/UploadPage/index'

class UploadPage extends React.Component {
  static defaultProps = {
    pathName: 'Upload',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Upload" />
        <UploadPageItems />
      </Page>
    )
  }
}

export default UploadPage
