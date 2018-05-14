import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import CalendarItems from 'components/AntComponents/Calendar/index'

class CalendarPage extends React.Component {
  static defaultProps = {
    pathName: 'Calendar',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Calendar" />
        <CalendarItems />
      </Page>
    )
  }
}

export default CalendarPage
