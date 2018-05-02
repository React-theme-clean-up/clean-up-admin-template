import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AvatarItems from 'components/AntDesign/Avatar/index'

class AvatarPage extends React.Component {
  static defaultProps = {
    pathName: 'Avatar',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Avatar" />
        <AvatarItems />
      </Page>
    )
  }
}

export default AvatarPage
