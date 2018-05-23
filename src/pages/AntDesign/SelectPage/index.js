import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SelectItems from 'components/AntComponents/Select/index'

class SelectPage extends React.Component {
  static defaultProps = {
    pathName: 'Select',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Select" />
        <SelectItems />
      </Page>
    )
  }
}

export default SelectPage
