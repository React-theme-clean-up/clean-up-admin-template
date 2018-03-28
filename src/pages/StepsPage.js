// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import StepsPageItems from 'components/AntComponents/StepsPage/index'

class StepsPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
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
