// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import PaginationPageItems from 'components/AntComponents/PaginationPage/index'

class PaginationPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <PaginationPageItems />
      </Page>
    )
  }
}

export default PaginationPage
