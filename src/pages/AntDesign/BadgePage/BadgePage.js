import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BadgeItems from 'components/AntDesign/Badge/index'

class BadgePage extends React.Component {
  static defaultProps = {
    pathName: 'Badge',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Badge" />
        <BadgeItems />
      </Page>
    )
  }
}

export default BadgePage
