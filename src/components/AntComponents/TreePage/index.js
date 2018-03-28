import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTreePageBasiccontrolled } from './basic-controlled.js';
import { default as renderTreePageBasic } from './basic.js';
import { default as renderTreePageCustomizedicon } from './customized-icon.js';
import { default as renderTreePageDraggable } from './draggable.js';
import { default as renderTreePageDynamic } from './dynamic.js';
import { default as renderTreePageLine } from './line.js';
import { default as renderTreePageSearch } from './search.js';


class TreePageItems extends React.Component {

  componentDidMount() {
    renderTreePageBasiccontrolled(ReactDOM, document.getElementById("TreePageBasiccontrolled"));
renderTreePageBasic(ReactDOM, document.getElementById("TreePageBasic"));
renderTreePageCustomizedicon(ReactDOM, document.getElementById("TreePageCustomizedicon"));
renderTreePageDraggable(ReactDOM, document.getElementById("TreePageDraggable"));
renderTreePageDynamic(ReactDOM, document.getElementById("TreePageDynamic"));
renderTreePageLine(ReactDOM, document.getElementById("TreePageLine"));
renderTreePageSearch(ReactDOM, document.getElementById("TreePageSearch"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Tree</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-tree-demo-basic-controlled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>basic controlled example</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageBasiccontrolled" />
  </div>
</div>
<div className="card" id="components-tree-demo-customized-icon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customize Icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageCustomizedicon" />
  </div>
</div>
<div className="card" id="components-tree-demo-dynamic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>load data asynchronously</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageDynamic" />
  </div>
</div>
<div className="card" id="components-tree-demo-search">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Searchable</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageSearch" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-tree-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageBasic" />
  </div>
</div>
<div className="card" id="components-tree-demo-draggable">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>draggable</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageDraggable" />
  </div>
</div>
<div className="card" id="components-tree-demo-line">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Tree With Line</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreePageLine" />
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

export default TreePageItems
