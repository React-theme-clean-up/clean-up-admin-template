import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TransferItems from 'components/AntComponents/Transfer/index'

class TransferPage extends React.Component {
  static defaultProps = {
    pathName: 'Transfer',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Transfer" />
        <TransferItems />
      </Page>
    )
  }
}

export default TransferPage
