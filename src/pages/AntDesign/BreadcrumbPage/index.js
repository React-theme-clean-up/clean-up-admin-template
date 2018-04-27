import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BreadcrumbItems from 'components/AntDesign/Breadcrumb/index'

class BreadcrumbPage extends React.Component {
  static defaultProps = {
    pathName: 'Breadcrumb',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Breadcrumb" />
        <BreadcrumbItems />
      </Page>
    )
  }
}

export default BreadcrumbPage
