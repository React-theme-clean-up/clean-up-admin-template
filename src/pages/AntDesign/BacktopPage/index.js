import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import BacktopItems from 'components/AntComponents/Backtop/index'

class BacktopPage extends React.Component {
  static defaultProps = {
    pathName: 'Backtop',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Backtop" />
        <BacktopItems />
      </Page>
    )
  }
}

export default BacktopPage
