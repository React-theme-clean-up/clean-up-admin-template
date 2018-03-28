// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import TagPageItems from 'components/AntComponents/TagPage/index'

class TagPage extends React.Component {
  static defaultProps = {
    pathName: 'Tag',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tag" />
        <TagPageItems />
      </Page>
    )
  }
}

export default TagPage
