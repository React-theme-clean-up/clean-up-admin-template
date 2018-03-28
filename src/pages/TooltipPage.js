// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import TooltipPageItems from 'components/AntComponents/TooltipPage/index'

class TooltipPage extends React.Component {
  static defaultProps = {
    pathName: 'Tooltip',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tooltip" />
        <TooltipPageItems />
      </Page>
    )
  }
}

export default TooltipPage
