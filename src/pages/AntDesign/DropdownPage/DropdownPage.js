
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import DropdownPageItems from 'components/AntDesign/DropdownPage/index'

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
