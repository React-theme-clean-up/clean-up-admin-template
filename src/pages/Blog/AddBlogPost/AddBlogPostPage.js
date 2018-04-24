// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import AddBlogPost from './AddBlogPost'

class BlogFeedPage extends React.Component {
  static defaultProps = {
    pathName: 'Add Blog Post',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Add Blog Post" />
        <AddBlogPost />
      </Page>
    )
  }
}

export default BlogFeedPage
