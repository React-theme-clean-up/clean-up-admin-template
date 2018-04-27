import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TransferItems from 'components/AntDesign/Transfer/index'

class TransferPage extends React.Component {
  static defaultProps = {
    pathName: 'Transfer',
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
