import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BacktopItems from 'components/AntDesign/Backtop/index'

class BacktopPage extends React.Component {
  static defaultProps = {
    pathName: 'Backtop',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Backtop" />
        <BacktopItems />
      </Page>
    )
  }
}

export default BacktopPage
