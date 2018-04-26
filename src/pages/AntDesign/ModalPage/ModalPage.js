import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ModalItems from 'components/AntDesign/Modal/index'

class ModalPage extends React.Component {
  static defaultProps = {
    pathName: 'Modal',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Modal" />
        <ModalItems />
      </Page>
    )
  }
}

export default ModalPage
