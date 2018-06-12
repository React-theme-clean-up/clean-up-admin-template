import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CarouselItems from 'components/AntComponents/Carousel/index'

class CarouselPage extends React.Component {
  static defaultProps = {
    pathName: 'Carousel',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Carousel" />
        <CarouselItems />
      </Page>
    )
  }
}

export default CarouselPage
