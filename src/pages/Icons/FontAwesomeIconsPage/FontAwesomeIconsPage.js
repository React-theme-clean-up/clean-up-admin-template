import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import FontAwesomeIcons from './FontAwesomeIcons'

class FontAwesomeIconsPage extends React.Component {
  static defaultProps = {
    pathName: 'FontAwesome Icons',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - FontAwesome Icons" />
        <FontAwesomeIcons />
      </Page>
    )
  }
}

export default FontAwesomeIconsPage