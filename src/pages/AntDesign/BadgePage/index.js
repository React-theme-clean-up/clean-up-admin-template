import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import BadgeItems from 'components/AntComponents/Badge/index'

class BadgePage extends React.Component {
  static defaultProps = {
    pathName: 'Badge',
    roles: ['agent', 'administrator'],
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
