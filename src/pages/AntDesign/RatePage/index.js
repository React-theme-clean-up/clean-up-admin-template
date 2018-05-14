import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import RateItems from 'components/AntComponents/Rate/index'

class RatePage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <RateItems />
      </Page>
    )
  }
}

export default RatePage
