import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import InputItems from 'components/AntComponents/Input/index'

class InputPage extends React.Component {
  static defaultProps = {
    pathName: 'Input',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Input" />
        <InputItems />
      </Page>
    )
  }
}

export default InputPage
