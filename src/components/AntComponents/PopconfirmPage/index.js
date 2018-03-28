import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderPopconfirmPageBasic } from './basic.js';
import { default as renderPopconfirmPageDynamictrigger } from './dynamic-trigger.js';
import { default as renderPopconfirmPageLocale } from './locale.js';
import { default as renderPopconfirmPagePlacement } from './placement.js';


class PopconfirmPageItems extends React.Component {

  componentDidMount() {
    renderPopconfirmPageBasic(ReactDOM, document.getElementById("PopconfirmPageBasic"));
renderPopconfirmPageDynamictrigger(ReactDOM, document.getElementById("PopconfirmPageDynamictrigger"));
renderPopconfirmPageLocale(ReactDOM, document.getElementById("PopconfirmPageLocale"));
renderPopconfirmPagePlacement(ReactDOM, document.getElementById("PopconfirmPagePlacement"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Popconfirm</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-popconfirm-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PopconfirmPageBasic" />
  </div>
</div>
<div className="card" id="components-popconfirm-demo-locale">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Locale text</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PopconfirmPageLocale" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-popconfirm-demo-dynamic-trigger">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Conditional trigger</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PopconfirmPageDynamictrigger" />
  </div>
</div>
<div className="card" id="components-popconfirm-demo-placement">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Placement</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PopconfirmPagePlacement" />
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

export default PopconfirmPageItems
