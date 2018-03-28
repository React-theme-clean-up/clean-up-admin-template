import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderAnchorPageBasic } from './basic.js';
import { default as renderAnchorPageStatic } from './static.js';


class AnchorPageItems extends React.Component {

  componentDidMount() {
    renderAnchorPageBasic(ReactDOM, document.getElementById("AnchorPageBasic"));
renderAnchorPageStatic(ReactDOM, document.getElementById("AnchorPageStatic"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Anchor</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-anchor-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AnchorPageBasic" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-anchor-demo-static">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Static Anchor</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AnchorPageStatic" />
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

export default AnchorPageItems
