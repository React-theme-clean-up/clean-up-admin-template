import React from 'react'
import Page from 'components/PageComponents'
import Helmet from 'react-helmet'
import PopoverItems from 'components/AntComponents/Popover/index'

class PopoverPage extends React.Component {
  static defaultProps = {
    pathName: 'Popover',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Popover" />
        <PopoverItems />
      </Page>
    )
  }
}

export default PopoverPage
