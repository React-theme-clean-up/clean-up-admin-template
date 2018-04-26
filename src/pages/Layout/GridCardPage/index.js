import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import GridCard from './GridCard'

class GridCardPage extends React.Component {
  static defaultProps = {
    pathName: 'Card',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Card" />
        <GridCard />
      </Page>
    )
  }
}

export default GridCardPage
