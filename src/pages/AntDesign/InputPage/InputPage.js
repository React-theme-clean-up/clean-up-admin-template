
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import InputPageItems from 'components/AntDesign/InputPage/index'

class InputPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <InputPageItems />
      </Page>
    )
  }
}

export default InputPage
