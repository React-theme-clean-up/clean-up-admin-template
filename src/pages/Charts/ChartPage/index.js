import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import ChartItems from './Chart'

class ChartistPage extends React.Component {
  static defaultProps = {
    pathName: 'Chart.js',
    roles: ['agent', 'administrator'],
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
