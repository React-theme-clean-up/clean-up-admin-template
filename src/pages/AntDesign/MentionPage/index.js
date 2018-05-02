import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MentionItems from 'components/AntDesign/Mention/index'

class MentionPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <MentionItems />
      </Page>
    )
  }
}

export default MentionPage
