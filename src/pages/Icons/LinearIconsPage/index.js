import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import LinearIcons from './LinearIcons'

class LinearIconsPage extends React.Component {
  static defaultProps = {
    pathName: 'Linear Icons',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Linear Icons" />
        <LinearIcons />
      </Page>
    )
  }
}

export default LinearIconsPage
