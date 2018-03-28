import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTreeselectPageBasic } from './basic.js';
import { default as renderTreeselectPageCheckable } from './checkable.js';
import { default as renderTreeselectPageMultiple } from './multiple.js';
import { default as renderTreeselectPageTreeData } from './treeData.js';


class TreeselectPageItems extends React.Component {

  componentDidMount() {
    renderTreeselectPageBasic(ReactDOM, document.getElementById("TreeselectPageBasic"));
renderTreeselectPageCheckable(ReactDOM, document.getElementById("TreeselectPageCheckable"));
renderTreeselectPageMultiple(ReactDOM, document.getElementById("TreeselectPageMultiple"));
renderTreeselectPageTreeData(ReactDOM, document.getElementById("TreeselectPageTreeData"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>TreeSelect</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-tree-select-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreeselectPageBasic" />
  </div>
</div>
<div className="card" id="components-tree-select-demo-multiple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Multiple Selection</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreeselectPageMultiple" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-tree-select-demo-checkable">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Checkable</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreeselectPageCheckable" />
  </div>
</div>
<div className="card" id="components-tree-select-demo-treeData">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Generate form tree data</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TreeselectPageTreeData" />
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

export default TreeselectPageItems
