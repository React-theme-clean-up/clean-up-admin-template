// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import SliderPageItems from 'components/AntComponents/SliderPage/index'

class SliderPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <SliderPageItems />
      </Page>
    )
  }
}

export default SliderPage
