import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderDatepickerPageBasic } from './basic.js';
import { default as renderDatepickerPageDaterender } from './date-render.js';
import { default as renderDatepickerPageDisableddate } from './disabled-date.js';
import { default as renderDatepickerPageDisabled } from './disabled.js';
import { default as renderDatepickerPageExtrafooter } from './extra-footer.js';
import { default as renderDatepickerPageFormat } from './format.js';
import { default as renderDatepickerPageMode } from './mode.js';
import { default as renderDatepickerPagePresettedranges } from './presetted-ranges.js';
import { default as renderDatepickerPageSize } from './size.js';
import { default as renderDatepickerPageStartend } from './start-end.js';
import { default as renderDatepickerPageTime } from './time.js';


class DatepickerPageItems extends React.Component {

  componentDidMount() {
    renderDatepickerPageBasic(ReactDOM, document.getElementById("DatepickerPageBasic"));
renderDatepickerPageDaterender(ReactDOM, document.getElementById("DatepickerPageDaterender"));
renderDatepickerPageDisableddate(ReactDOM, document.getElementById("DatepickerPageDisableddate"));
renderDatepickerPageDisabled(ReactDOM, document.getElementById("DatepickerPageDisabled"));
renderDatepickerPageExtrafooter(ReactDOM, document.getElementById("DatepickerPageExtrafooter"));
renderDatepickerPageFormat(ReactDOM, document.getElementById("DatepickerPageFormat"));
renderDatepickerPageMode(ReactDOM, document.getElementById("DatepickerPageMode"));
renderDatepickerPagePresettedranges(ReactDOM, document.getElementById("DatepickerPagePresettedranges"));
renderDatepickerPageSize(ReactDOM, document.getElementById("DatepickerPageSize"));
renderDatepickerPageStartend(ReactDOM, document.getElementById("DatepickerPageStartend"));
renderDatepickerPageTime(ReactDOM, document.getElementById("DatepickerPageTime"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>DatePicker</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-date-picker-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageBasic" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-disabled-date">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Disabled Date</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageDisableddate" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-extra-footer">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Extra Footer</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageExtrafooter" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-mode">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Controlled Panels</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageMode" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Three Sizes</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageSize" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-time">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Choose Time</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageTime" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-date-picker-demo-date-render">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Date Rendering</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageDaterender" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-disabled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Disabled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageDisabled" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-format">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Date Format</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageFormat" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-presetted-ranges">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Presetted Ranges</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPagePresettedranges" />
  </div>
</div>
<div className="card" id="components-date-picker-demo-start-end">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Range Picker</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="DatepickerPageStartend" />
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

export default DatepickerPageItems
