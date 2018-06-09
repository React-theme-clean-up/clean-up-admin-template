import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import BreadcrumbItems from 'components/AntComponents/Breadcrumb/index'

class BreadcrumbPage extends React.Component {
  static defaultProps = {
    pathName: 'Breadcrumb',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Breadcrumb" />
        <BreadcrumbItems />
      </Page>
    )
  }
}

export default BreadcrumbPage
