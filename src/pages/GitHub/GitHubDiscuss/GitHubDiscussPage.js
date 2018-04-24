// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import GitHubDiscuss from './GitHubDiscuss'

class GitHubDiscussPage extends React.Component {
  static defaultProps = {
    pathName: 'GitHub Discuss',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - GitHub Discuss" />
        <GitHubDiscuss />
      </Page>
    )
  }
}

export default GitHubDiscussPage
