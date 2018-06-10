import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import MenuItems from 'components/AntComponents/Menu/index'

class MenuPage extends React.Component {
  static defaultProps = {
    pathName: 'Menu',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Menu" />
        <MenuItems />
      </Page>
    )
  }
}

export default MenuPage
