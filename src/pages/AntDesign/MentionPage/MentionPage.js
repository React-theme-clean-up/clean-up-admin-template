import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MentionPageItems from 'components/AntDesign/MentionPage/index'

class MentionPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <MentionPageItems />
      </Page>
    )
  }
}

export default MentionPage
