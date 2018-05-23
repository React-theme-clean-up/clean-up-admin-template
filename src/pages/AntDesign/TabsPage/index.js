import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TabsItems from 'components/AntComponents/Tabs/index'

class TabsPage extends React.Component {
  static defaultProps = {
    pathName: 'Tabs',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tabs" />
        <TabsItems />
      </Page>
    )
  }
}

export default TabsPage
