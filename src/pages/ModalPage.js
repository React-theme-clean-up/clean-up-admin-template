// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import ModalPageItems from 'components/AntComponents/ModalPage/index'

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
