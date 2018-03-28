import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTimepickerPage12hours } from './12hours.js';
import { default as renderTimepickerPageAddon } from './addon.js';
import { default as renderTimepickerPageBasic } from './basic.js';
import { default as renderTimepickerPageDisabled } from './disabled.js';
import { default as renderTimepickerPageHidecolumn } from './hide-column.js';
import { default as renderTimepickerPageIntervaloptions } from './interval-options.js';
import { default as renderTimepickerPageSize } from './size.js';
import { default as renderTimepickerPageValue } from './value.js';


class TimepickerPageItems extends React.Component {

  componentDidMount() {
    renderTimepickerPage12hours(ReactDOM, document.getElementById("TimepickerPage12hours"));
renderTimepickerPageAddon(ReactDOM, document.getElementById("TimepickerPageAddon"));
renderTimepickerPageBasic(ReactDOM, document.getElementById("TimepickerPageBasic"));
renderTimepickerPageDisabled(ReactDOM, document.getElementById("TimepickerPageDisabled"));
renderTimepickerPageHidecolumn(ReactDOM, document.getElementById("TimepickerPageHidecolumn"));
renderTimepickerPageIntervaloptions(ReactDOM, document.getElementById("TimepickerPageIntervaloptions"));
renderTimepickerPageSize(ReactDOM, document.getElementById("TimepickerPageSize"));
renderTimepickerPageValue(ReactDOM, document.getElementById("TimepickerPageValue"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>TimePicker</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-time-picker-demo-12hours">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>12 hours</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPage12hours" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageBasic" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-hide-column">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Hour and minute</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageHidecolumn" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Three Sizes</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageSize" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-time-picker-demo-addon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Addon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageAddon" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-disabled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>disabled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageDisabled" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-interval-options">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>interval option</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageIntervaloptions" />
  </div>
</div>
<div className="card" id="components-time-picker-demo-value">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Under Control</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimepickerPageValue" />
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

export default TimepickerPageItems
