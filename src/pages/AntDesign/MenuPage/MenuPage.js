// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import MenuPageItems from 'components/AntComponents/MenuPage/index'

class MenuPage extends React.Component {
  static defaultProps = {
    pathName: 'Menu',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Menu" />
        <MenuPageItems />
      </Page>
    )
  }
}

export default MenuPage
