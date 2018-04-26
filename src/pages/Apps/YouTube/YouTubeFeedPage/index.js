import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import YouTubeFeed from './YouTubeFeed'

class YouTubeFeedPage extends React.Component {
  static defaultProps = {
    pathName: 'YouTube Feed',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - YouTube Feed" />
        <YouTubeFeed />
      </Page>
    )
  }
}

export default YouTubeFeedPage
