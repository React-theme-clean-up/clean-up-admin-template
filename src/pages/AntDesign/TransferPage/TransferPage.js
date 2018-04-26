
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TransferPageItems from 'components/AntDesign/TransferPage/index'

class TransferPage extends React.Component {
  static defaultProps = {
    pathName: 'Transfer',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Transfer" />
        <TransferPageItems />
      </Page>
    )
  }
}

export default TransferPage
