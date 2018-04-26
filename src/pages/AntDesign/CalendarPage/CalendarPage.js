import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CalendarPageItems from 'components/AntDesign/CalendarPage/index'

class CalendarPage extends React.Component {
  static defaultProps = {
    pathName: 'Calendar',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Calendar" />
        <CalendarPageItems />
      </Page>
    )
  }
}

export default CalendarPage
