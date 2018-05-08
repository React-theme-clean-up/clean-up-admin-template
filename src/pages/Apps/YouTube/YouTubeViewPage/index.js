import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import YouTubeView from './YouTubeView'

class YouTubeViewPage extends React.Component {
  static defaultProps = {
    pathName: 'YouTube View',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - YouTube View" />
        <YouTubeView />
      </Page>
    )
  }
}

export default YouTubeViewPage
