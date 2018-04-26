import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TableItems from 'components/AntDesign/Table/index'

class TablePage extends React.Component {
  static defaultProps = {
    pathName: 'Table',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Table" />
        <TableItems />
      </Page>
    )
  }
}

export default TablePage
