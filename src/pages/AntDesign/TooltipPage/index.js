import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import TooltipItems from 'components/AntComponents/Tooltip/index'

class TooltipPage extends React.Component {
  static defaultProps = {
    pathName: 'Tooltip',
    roles: ['agent', 'administrator'],
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
