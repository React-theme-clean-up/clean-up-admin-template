import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MenuItems from 'components/AntDesign/Menu/index'

class MenuPage extends React.Component {
  static defaultProps = {
    pathName: 'Menu',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Menu" />
        <MenuItems />
      </Page>
    )
  }
}

export default MenuPage
