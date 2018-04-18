// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import DividerPageItems from 'components/AntComponents/DividerPage/index'

class DividerPage extends React.Component {
  static defaultProps = {
    pathName: 'Divider',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Devider" />
        <DividerPageItems />
      </Page>
    )
  }
}

export default DividerPage
