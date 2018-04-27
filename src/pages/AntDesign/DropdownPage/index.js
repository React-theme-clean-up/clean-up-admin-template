import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import DropdownItems from 'components/AntDesign/Dropdown/index'

class DropdownPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <DropdownItems />
      </Page>
    )
  }
}

export default DropdownPage
