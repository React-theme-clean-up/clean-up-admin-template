import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderButtonPageBasic } from './basic.js';
import { default as renderButtonPageButtongroup } from './button-group.js';
import { default as renderButtonPageDisabled } from './disabled.js';
import { default as renderButtonPageGhost } from './ghost.js';
import { default as renderButtonPageIcon } from './icon.js';
import { default as renderButtonPageLoading } from './loading.js';
import { default as renderButtonPageMultiple } from './multiple.js';
import { default as renderButtonPageSize } from './size.js';


class ButtonPageItems extends React.Component {

  componentDidMount() {
    renderButtonPageBasic(ReactDOM, document.getElementById("ButtonPageBasic"));
renderButtonPageButtongroup(ReactDOM, document.getElementById("ButtonPageButtongroup"));
renderButtonPageDisabled(ReactDOM, document.getElementById("ButtonPageDisabled"));
renderButtonPageGhost(ReactDOM, document.getElementById("ButtonPageGhost"));
renderButtonPageIcon(ReactDOM, document.getElementById("ButtonPageIcon"));
renderButtonPageLoading(ReactDOM, document.getElementById("ButtonPageLoading"));
renderButtonPageMultiple(ReactDOM, document.getElementById("ButtonPageMultiple"));
renderButtonPageSize(ReactDOM, document.getElementById("ButtonPageSize"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Button</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-button-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Type</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageBasic" />
  </div>
</div>
<div className="card" id="components-button-demo-disabled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Disabled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageDisabled" />
  </div>
</div>
<div className="card" id="components-button-demo-icon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageIcon" />
  </div>
</div>
<div className="card" id="components-button-demo-multiple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Multiple Buttons</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageMultiple" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-button-demo-button-group">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Button Group</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageButtongroup" />
  </div>
</div>
<div className="card" id="components-button-demo-ghost">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Ghost Button</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageGhost" />
  </div>
</div>
<div className="card" id="components-button-demo-loading">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Loading</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageLoading" />
  </div>
</div>
<div className="card" id="components-button-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Size</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ButtonPageSize" />
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

export default ButtonPageItems
