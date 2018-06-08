import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TagItems from 'components/AntComponents/Tag/index'

class TagPage extends React.Component {
  static defaultProps = {
    pathName: 'Tag',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Tag" />
        <TagItems />
      </Page>
    )
  }
}

export default TagPage
