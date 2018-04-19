// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import CarouselPageItems from 'components/AntComponents/CarouselPage/index'

class CarouselPage extends React.Component {
  static defaultProps = {
    pathName: 'Carousel',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Carousel" />
        <CarouselPageItems />
      </Page>
    )
  }
}

export default CarouselPage
