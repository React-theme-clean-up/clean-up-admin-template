import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import LinearIcons from 'components/Pages/LinearIcons/LinearIcons'

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
