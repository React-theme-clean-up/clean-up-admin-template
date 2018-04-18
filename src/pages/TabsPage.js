// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import TabsPageItems from 'components/AntComponents/TabsPage/index'

class TabsPage extends React.Component {
  static defaultProps = {
    pathName: 'Tabs',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tabs" />
        <TabsPageItems />
      </Page>
    )
  }
}

export default TabsPage
