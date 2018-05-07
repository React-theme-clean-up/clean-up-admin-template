import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ListItems from 'components/AntDesign/List/index'

class ListPage extends React.Component {
  static defaultProps = {
    pathName: 'List',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - List" />
        <ListItems />
      </Page>
    )
  }
}

export default ListPage
