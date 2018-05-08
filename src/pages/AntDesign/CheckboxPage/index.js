import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import CheckboxItems from 'components/AntDesign/Checkbox/index'

class CheckboxPage extends React.Component {
  static defaultProps = {
    pathName: 'Checkbox',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Checkbox" />
        <CheckboxItems />
      </Page>
    )
  }
}

export default CheckboxPage
