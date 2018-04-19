// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import ProgressPageItems from 'components/AntComponents/ProgressPage/index'

class ProgressPage extends React.Component {
  static defaultProps = {
    pathName: 'Progress',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Progress" />
        <ProgressPageItems />
      </Page>
    )
  }
}

export default ProgressPage
