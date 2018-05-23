import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import AvatarItems from 'components/AntComponents/Avatar/index'

class AvatarPage extends React.Component {
  static defaultProps = {
    pathName: 'Avatar',
    roles: ['agent', 'administrator'],
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
