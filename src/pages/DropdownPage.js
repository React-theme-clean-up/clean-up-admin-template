// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import DropdownPageItems from 'components/AntComponents/DropdownPage/index'

class DropdownPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <DropdownPageItems />
      </Page>
    )
  }
}

export default DropdownPage
