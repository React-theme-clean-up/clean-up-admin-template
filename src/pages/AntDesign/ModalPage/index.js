import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ModalItems from 'components/AntComponents/Modal/index'

class ModalPage extends React.Component {
  static defaultProps = {
    pathName: 'Modal',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Modal" />
        <ModalItems />
      </Page>
    )
  }
}

export default ModalPage
