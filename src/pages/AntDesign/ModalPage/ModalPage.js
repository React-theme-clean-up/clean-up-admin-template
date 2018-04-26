
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ModalPageItems from 'components/AntDesign/ModalPage/index'

class ModalPage extends React.Component {
  static defaultProps = {
    pathName: 'Modal',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Modal" />
        <ModalPageItems />
      </Page>
    )
  }
}

export default ModalPage
