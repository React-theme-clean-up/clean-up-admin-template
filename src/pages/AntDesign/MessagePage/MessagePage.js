
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import MessagePageItems from 'components/AntDesign/MessagePage/index'

class MessagePage extends React.Component {
  static defaultProps = {
    pathName: 'Message',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Message" />
        <MessagePageItems />
      </Page>
    )
  }
}

export default MessagePage
