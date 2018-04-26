import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BlogAddPost from './BlogAddPost'

class BlogAddPostPage extends React.Component {
  static defaultProps = {
    pathName: 'Add Blog Post',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Add Blog Post" />
        <BlogAddPost />
      </Page>
    )
  }
}

export default BlogAddPostPage
