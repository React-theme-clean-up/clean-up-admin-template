
import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import RadioPageItems from 'components/AntDesign/RadioPage/index'

class RadioPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <RadioPageItems />
      </Page>
    )
  }
}

export default RadioPage
