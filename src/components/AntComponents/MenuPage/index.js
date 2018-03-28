import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderMenuPageHorizontal } from './horizontal.js';
import { default as renderMenuPageInlinecollapsed } from './inline-collapsed.js';
import { default as renderMenuPageInline } from './inline.js';
import { default as renderMenuPageSidercurrent } from './sider-current.js';
import { default as renderMenuPageSwitchmode } from './switch-mode.js';
import { default as renderMenuPageTheme } from './theme.js';
import { default as renderMenuPageVertical } from './vertical.js';


class MenuPageItems extends React.Component {

  componentDidMount() {
    renderMenuPageHorizontal(ReactDOM, document.getElementById("MenuPageHorizontal"));
renderMenuPageInlinecollapsed(ReactDOM, document.getElementById("MenuPageInlinecollapsed"));
renderMenuPageInline(ReactDOM, document.getElementById("MenuPageInline"));
renderMenuPageSidercurrent(ReactDOM, document.getElementById("MenuPageSidercurrent"));
renderMenuPageSwitchmode(ReactDOM, document.getElementById("MenuPageSwitchmode"));
renderMenuPageTheme(ReactDOM, document.getElementById("MenuPageTheme"));
renderMenuPageVertical(ReactDOM, document.getElementById("MenuPageVertical"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Menu</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-menu-demo-horizontal">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Top Navigation</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageHorizontal" />
  </div>
</div>
<div className="card" id="components-menu-demo-inline">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Inline menu</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageInline" />
  </div>
</div>
<div className="card" id="components-menu-demo-switch-mode">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Switch the menu type</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageSwitchmode" />
  </div>
</div>
<div className="card" id="components-menu-demo-vertical">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical menu</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageVertical" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-menu-demo-inline-collapsed">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Collapsed inline menu</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageInlinecollapsed" />
  </div>
</div>
<div className="card" id="components-menu-demo-sider-current">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Open current submenu only</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageSidercurrent" />
  </div>
</div>
<div className="card" id="components-menu-demo-theme">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Menu Themes</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="MenuPageTheme" />
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

export default MenuPageItems
