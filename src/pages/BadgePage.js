// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import BadgePageItems from 'components/AntComponents/BadgePage/index'

class BadgePage extends React.Component {
  static defaultProps = {
    pathName: 'Badge',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Badge" />
        <BadgePageItems />
      </Page>
    )
  }
}

export default BadgePage
