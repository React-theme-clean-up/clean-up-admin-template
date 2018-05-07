import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BlogPost from './BlogPost'

class BlogPostPage extends React.Component {
  static defaultProps = {
    pathName: 'Blog Post',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Blog Post" />
        <BlogPost />
      </Page>
    )
  }
}

export default BlogPostPage
