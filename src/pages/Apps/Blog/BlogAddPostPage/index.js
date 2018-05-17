import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import BlogAddPost from './BlogAddPost'

class BlogAddPostPage extends React.Component {
  static defaultProps = {
    pathName: 'Add Blog Post',
    roles: ['agent', 'administrator'],
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
