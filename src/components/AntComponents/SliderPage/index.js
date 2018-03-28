import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderSliderPageBasic } from './basic.js';
import { default as renderSliderPageEvent } from './event.js';
import { default as renderSliderPageIconslider } from './icon-slider.js';
import { default as renderSliderPageInputnumber } from './input-number.js';
import { default as renderSliderPageMark } from './mark.js';
import { default as renderSliderPageTipformatter } from './tip-formatter.js';
import { default as renderSliderPageVertical } from './vertical.js';


class SliderPageItems extends React.Component {

  componentDidMount() {
    renderSliderPageBasic(ReactDOM, document.getElementById("SliderPageBasic"));
renderSliderPageEvent(ReactDOM, document.getElementById("SliderPageEvent"));
renderSliderPageIconslider(ReactDOM, document.getElementById("SliderPageIconslider"));
renderSliderPageInputnumber(ReactDOM, document.getElementById("SliderPageInputnumber"));
renderSliderPageMark(ReactDOM, document.getElementById("SliderPageMark"));
renderSliderPageTipformatter(ReactDOM, document.getElementById("SliderPageTipformatter"));
renderSliderPageVertical(ReactDOM, document.getElementById("SliderPageVertical"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Slider</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-slider-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageBasic" />
  </div>
</div>
<div className="card" id="components-slider-demo-icon-slider">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Slider with icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageIconslider" />
  </div>
</div>
<div className="card" id="components-slider-demo-mark">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Graduated slider</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageMark" />
  </div>
</div>
<div className="card" id="components-slider-demo-vertical">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageVertical" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-slider-demo-event">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Event</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageEvent" />
  </div>
</div>
<div className="card" id="components-slider-demo-input-number">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Slider with InputNumber</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageInputnumber" />
  </div>
</div>
<div className="card" id="components-slider-demo-tip-formatter">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customerize tooltip</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SliderPageTipformatter" />
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

export default SliderPageItems
