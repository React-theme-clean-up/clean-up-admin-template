import React from 'react'
import { Carousel } from 'antd'
import './style.css'

class SliderCard extends React.Component {
  state = {
    inverse: false,
  }

  getParams = () => {
    let params = this.props

    let { inverse } = this.state

    if (params.inverse !== undefined) {
      inverse = params.inverse
    }

    this.setState({
      inverse: inverse,
    })
  }

  componentWillMount() {
    this.getParams()
  }

  render() {
    let { inverse } = this.state

    return (
      <div className={`sliderCard ${inverse === true ? 'sliderCard--inverse' : ''}`}>
        <Carousel autoplay>
          <div className="sliderCard__item">
            <a href={''} className="sliderCard__body">
              <div className="sliderCard__icon">
                <i className="icmn-accessibility" />
              </div>
              <h2>Sales Growth</h2>
              <p>View Report</p>
            </a>
          </div>
          <div className="sliderCard__item">
            <a href={''} className="sliderCard__body">
              <div className="sliderCard__icon">
                <i className="icmn-download" />
              </div>
              <h2>All Reports</h2>
              <p>Pdf Download</p>
            </a>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SliderCard
