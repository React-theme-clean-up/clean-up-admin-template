import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BreadcrumbPageItems from 'components/AntDesign/BreadcrumbPage/index'

class BreadcrumbPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Breadcrumb" />
        <BreadcrumbPageItems />
      </Page>
    )
  }
}

export default BreadcrumbPage
