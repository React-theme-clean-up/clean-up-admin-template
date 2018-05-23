import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SliderItems from 'components/AntComponents/Slider/index'

class SliderPage extends React.Component {
  static defaultProps = {
    pathName: 'Slider',
    roles: ['agent', 'administrator'],
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
