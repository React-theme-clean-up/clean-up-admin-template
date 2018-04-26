import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import BacktopPageItems from 'components/AntDesign/BacktopPage/index'

class BacktopPage extends React.Component {
  static defaultProps = {
    pathName: 'Backtop',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Backtop" />
        <BacktopPageItems />
      </Page>
    )
  }
}

export default BacktopPage
