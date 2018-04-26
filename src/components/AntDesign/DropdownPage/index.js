import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderDropdownPageBasic } from './basic.js'
import { default as renderDropdownPageContextmenu } from './context-menu.js'
import { default as renderDropdownPageDropdownbutton } from './dropdown-button.js'
import { default as renderDropdownPageEvent } from './event.js'
import { default as renderDropdownPageItem } from './item.js'
import { default as renderDropdownPageOverlayvisible } from './overlay-visible.js'
import { default as renderDropdownPagePlacement } from './placement.js'
import { default as renderDropdownPageSubmenu } from './sub-menu.js'
import { default as renderDropdownPageTrigger } from './trigger.js'

class DropdownPageItems extends React.Component {
  componentDidMount() {
    renderDropdownPageBasic(ReactDOM, document.getElementById('DropdownPageBasic'))
    renderDropdownPageContextmenu(ReactDOM, document.getElementById('DropdownPageContextmenu'))
    renderDropdownPageDropdownbutton(
      ReactDOM,
      document.getElementById('DropdownPageDropdownbutton'),
    )
    renderDropdownPageEvent(ReactDOM, document.getElementById('DropdownPageEvent'))
    renderDropdownPageItem(ReactDOM, document.getElementById('DropdownPageItem'))
    renderDropdownPageOverlayvisible(
      ReactDOM,
      document.getElementById('DropdownPageOverlayvisible'),
    )
    renderDropdownPagePlacement(ReactDOM, document.getElementById('DropdownPagePlacement'))
    renderDropdownPageSubmenu(ReactDOM, document.getElementById('DropdownPageSubmenu'))
    renderDropdownPageTrigger(ReactDOM, document.getElementById('DropdownPageTrigger'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Dropdown</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-dropdown-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-dropdown-button">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Button with dropdown menu</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageDropdownbutton" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-item">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Other elements</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageItem" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-placement">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Placement</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPagePlacement" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-trigger">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Trigger mode</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageTrigger" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-dropdown-demo-context-menu">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Context Menu</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageContextmenu" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-event">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Click event</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageEvent" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-overlay-visible">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>The way of hiding</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageOverlayvisible" />
                    </div>
                  </div>
                  <div className="card" id="components-dropdown-demo-sub-menu">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Cascading menu</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DropdownPageSubmenu" />
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

export default DropdownPageItems
