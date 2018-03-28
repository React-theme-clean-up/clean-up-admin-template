import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderSwitchPageBasic } from './basic.js';
import { default as renderSwitchPageDisabled } from './disabled.js';
import { default as renderSwitchPageLoading } from './loading.js';
import { default as renderSwitchPageSize } from './size.js';
import { default as renderSwitchPageText } from './text.js';


class SwitchPageItems extends React.Component {

  componentDidMount() {
    renderSwitchPageBasic(ReactDOM, document.getElementById("SwitchPageBasic"));
renderSwitchPageDisabled(ReactDOM, document.getElementById("SwitchPageDisabled"));
renderSwitchPageLoading(ReactDOM, document.getElementById("SwitchPageLoading"));
renderSwitchPageSize(ReactDOM, document.getElementById("SwitchPageSize"));
renderSwitchPageText(ReactDOM, document.getElementById("SwitchPageText"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Switch</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-switch-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SwitchPageBasic" />
  </div>
</div>
<div className="card" id="components-switch-demo-loading">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Loading</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SwitchPageLoading" />
  </div>
</div>
<div className="card" id="components-switch-demo-text">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Text</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SwitchPageText" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-switch-demo-disabled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Disabled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SwitchPageDisabled" />
  </div>
</div>
<div className="card" id="components-switch-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Two sizes</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="SwitchPageSize" />
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

export default SwitchPageItems
