// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import AvatarPageItems from 'components/AntComponents/AvatarPage/index'

class AvatarPage extends React.Component {
  static defaultProps = {
    pathName: 'Avatar',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Avatar" />
        <AvatarPageItems />
      </Page>
    )
  }
}

export default AvatarPage
