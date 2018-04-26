
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import StepsPageItems from 'components/AntDesign/StepsPage/index'

class StepsPage extends React.Component {
  static defaultProps = {
    pathName: 'Steps',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <StepsPageItems />
      </Page>
    )
  }
}

export default StepsPage
