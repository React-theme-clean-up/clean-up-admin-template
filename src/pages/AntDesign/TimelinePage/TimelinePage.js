// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import TimelineItems from 'components/AntComponents/TimelinePage/index'

class TimelinePage extends React.Component {
  static defaultProps = {
    pathName: 'Timeline',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Timeline" />
        <TimelineItems />
      </Page>
    )
  }
}

export default TimelinePage
