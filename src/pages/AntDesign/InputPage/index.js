import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import InputItems from 'components/AntDesign/Input/index'

class InputPage extends React.Component {
  static defaultProps = {
    pathName: 'Input',
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
