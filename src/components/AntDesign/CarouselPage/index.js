import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderCarouselPageAutoplay } from './autoplay.js'
import { default as renderCarouselPageBasic } from './basic.js'
import { default as renderCarouselPageFade } from './fade.js'
import { default as renderCarouselPageVertical } from './vertical.js'

class CarouselPageItems extends React.Component {
  componentDidMount() {
    renderCarouselPageAutoplay(ReactDOM, document.getElementById('CarouselPageAutoplay'))
    renderCarouselPageBasic(ReactDOM, document.getElementById('CarouselPageBasic'))
    renderCarouselPageFade(ReactDOM, document.getElementById('CarouselPageFade'))
    renderCarouselPageVertical(ReactDOM, document.getElementById('CarouselPageVertical'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Carousel</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-carousel-demo-autoplay">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Scroll automatically</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CarouselPageAutoplay" />
                    </div>
                  </div>
                  <div className="card" id="components-carousel-demo-fade">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Fade in</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CarouselPageFade" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-carousel-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CarouselPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-carousel-demo-vertical">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Vertical</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CarouselPageVertical" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselPageItems
