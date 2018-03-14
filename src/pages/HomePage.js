// @flow
import React from 'react'
import Page from 'components/Pages/Page'

class HomePage extends React.Component {
  static defaultProps = {
    roles: ['init'],
  }

  render() {
    const props = this.props
    return <Page {...props} />
  }
}

export default HomePage