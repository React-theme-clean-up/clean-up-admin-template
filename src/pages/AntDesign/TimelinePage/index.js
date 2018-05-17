import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import TimelineItems from 'components/AntComponents/Timeline/index'

class TimelinePage extends React.Component {
  static defaultProps = {
    pathName: 'Timeline',
    roles: ['agent', 'administrator'],
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
