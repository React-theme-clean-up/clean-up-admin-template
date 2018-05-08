import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ProgressItems from 'components/AntDesign/Progress/index'

class ProgressPage extends React.Component {
  static defaultProps = {
    pathName: 'Progress',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Progress" />
        <ProgressItems />
      </Page>
    )
  }
}

export default ProgressPage
