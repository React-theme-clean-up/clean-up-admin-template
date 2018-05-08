import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import RadioItems from 'components/AntDesign/Radio/index'

class RadioPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <RadioItems />
      </Page>
    )
  }
}

export default RadioPage
