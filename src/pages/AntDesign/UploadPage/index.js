import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import UploadItems from 'components/AntComponents/Upload/index'

class UploadPage extends React.Component {
  static defaultProps = {
    pathName: 'Upload',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Upload" />
        <UploadItems />
      </Page>
    )
  }
}

export default UploadPage
