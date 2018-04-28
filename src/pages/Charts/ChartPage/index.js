import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import ChartItems from './Chart'

class ChartistPage extends React.Component {
  static defaultProps = {
    pathName: 'Chart.js',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Chart.js" />
        <ChartItems />
      </Page>
    )
  }
}

export default ChartistPage
