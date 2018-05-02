import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import TooltipItems from 'components/AntDesign/Tooltip/index'

class TooltipPage extends React.Component {
  static defaultProps = {
    pathName: 'Tooltip',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Tooltip" />
        <TooltipItems />
      </Page>
    )
  }
}

export default TooltipPage
