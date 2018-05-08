import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import DatepickerItems from 'components/AntDesign/Datepicker/index'

class DatepickerPage extends React.Component {
  static defaultProps = {
    pathName: 'Date picker',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Date picker" />
        <DatepickerItems />
      </Page>
    )
  }
}

export default DatepickerPage
