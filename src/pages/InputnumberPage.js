// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import InputnumberPageItems from 'components/AntComponents/InputnumberPage/index'

class InputnumberPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <InputnumberPageItems />
      </Page>
    )
  }
}

export default InputnumberPage
