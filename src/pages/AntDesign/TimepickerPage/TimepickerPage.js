import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TimepickerPageItems from 'components/AntDesign/TimepickerPage/index'

class TimepickerPage extends React.Component {
  static defaultProps = {
    pathName: 'Timepicker',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Timepicker" />
        <TimepickerPageItems />
      </Page>
    )
  }
}

export default TimepickerPage
