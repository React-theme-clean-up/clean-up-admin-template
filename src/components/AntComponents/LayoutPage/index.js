import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderLayoutPageBasic } from './basic.js';
import { default as renderLayoutPageCustomtrigger } from './custom-trigger.js';
import { default as renderLayoutPageFixedsider } from './fixed-sider.js';
import { default as renderLayoutPageFixed } from './fixed.js';
import { default as renderLayoutPageResponsive } from './responsive.js';
import { default as renderLayoutPageSide } from './side.js';
import { default as renderLayoutPageTopside2 } from './top-side-2.js';
import { default as renderLayoutPageTopside } from './top-side.js';
import { default as renderLayoutPageTop } from './top.js';


class LayoutPageItems extends React.Component {

  componentDidMount() {
    renderLayoutPageBasic(ReactDOM, document.getElementById("LayoutPageBasic"));
renderLayoutPageCustomtrigger(ReactDOM, document.getElementById("LayoutPageCustomtrigger"));
renderLayoutPageFixedsider(ReactDOM, document.getElementById("LayoutPageFixedsider"));
renderLayoutPageFixed(ReactDOM, document.getElementById("LayoutPageFixed"));
renderLayoutPageResponsive(ReactDOM, document.getElementById("LayoutPageResponsive"));
renderLayoutPageSide(ReactDOM, document.getElementById("LayoutPageSide"));
renderLayoutPageTopside2(ReactDOM, document.getElementById("LayoutPageTopside2"));
renderLayoutPageTopside(ReactDOM, document.getElementById("LayoutPageTopside"));
renderLayoutPageTop(ReactDOM, document.getElementById("LayoutPageTop"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Layout</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-layout-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic Structure</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageBasic" />
  </div>
</div>
<div className="card" id="components-layout-demo-fixed-sider">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Fixed Sider</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageFixedsider" />
  </div>
</div>
<div className="card" id="components-layout-demo-responsive">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Responsive</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageResponsive" />
  </div>
</div>
<div className="card" id="components-layout-demo-top-side-2">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Header Sider 2</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageTopside2" />
  </div>
</div>
<div className="card" id="components-layout-demo-top">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong></strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageTop" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-layout-demo-custom-trigger">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Custom trigger</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageCustomtrigger" />
  </div>
</div>
<div className="card" id="components-layout-demo-fixed">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Fixed Header</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageFixed" />
  </div>
</div>
<div className="card" id="components-layout-demo-side">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Sider</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageSide" />
  </div>
</div>
<div className="card" id="components-layout-demo-top-side">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong></strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LayoutPageTopside" />
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

export default LayoutPageItems
