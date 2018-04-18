// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import UploadPageItems from 'components/AntComponents/UploadPage/index'

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
