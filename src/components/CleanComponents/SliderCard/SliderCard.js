import React from 'react'
import { Carousel } from 'antd';

import './SliderCard.css'

class SliderCard extends React.Component {

  render() {
    return (
      <Carousel autoplay>
        <div className="sliderCard__item bg-default active">
          <a href="javascript: void(0);" className="sliderCard__body text-white">
            <div className="sliderCard__icon">
              <i className="icmn-accessibility"></i>
            </div>
            <h2 className="text-white">Sales Growth</h2>
            <p>View Report</p>
          </a>
        </div>
        <div className="sliderCard__item bg-default">
          <a href="javascript: void(0);" className="sliderCard__body text-white">
            <div className="sliderCard__icon">
              <i className="icmn-download"></i>
            </div>
            <h2 className="text-white">All Reports</h2>
            <p>Pdf Download</p>
          </a>
        </div>
      </Carousel>
    )
  }
}

export default SliderCard