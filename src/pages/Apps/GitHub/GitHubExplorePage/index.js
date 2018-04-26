import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import GitHubExplore from './GitHubExplore'

class GitHubExplorePage extends React.Component {
  static defaultProps = {
    pathName: 'GitHub Explore',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - GitHub Explore" />
        <GitHubExplore />
      </Page>
    )
  }
}

export default GitHubExplorePage
