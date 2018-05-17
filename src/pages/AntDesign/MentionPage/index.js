import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import MentionItems from 'components/AntComponents/Mention/index'

class MentionPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
    roles: ['agent', 'administrator'],
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
