import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import SliderItems from 'components/AntDesign/Slider/index'

class SliderPage extends React.Component {
  static defaultProps = {
    pathName: 'Slider',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Slider" />
        <SliderItems />
      </Page>
    )
  }
}

export default SliderPage
