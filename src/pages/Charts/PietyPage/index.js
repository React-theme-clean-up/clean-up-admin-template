import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import PietyItems from './Piety'

class PietyPage extends React.Component {
  static defaultProps = {
    pathName: 'Piety',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Piety" />
        <PietyItems />
      </Page>
    )
  }
}

export default PietyPage
