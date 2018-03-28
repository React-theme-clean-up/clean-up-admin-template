import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderPopoverPageArrowpointatcenter } from './arrow-point-at-center.js'
import { default as renderPopoverPageBasic } from './basic.js'
import { default as renderPopoverPageControl } from './control.js'
import { default as renderPopoverPagePlacement } from './placement.js'
import { default as renderPopoverPageTriggerType } from './triggerType.js'

class PopoverPageItems extends React.Component {
  componentDidMount() {
    renderPopoverPageArrowpointatcenter(
      ReactDOM,
      document.getElementById('PopoverPageArrowpointatcenter'),
    )
    renderPopoverPageBasic(ReactDOM, document.getElementById('PopoverPageBasic'))
    renderPopoverPageControl(ReactDOM, document.getElementById('PopoverPageControl'))
    renderPopoverPagePlacement(ReactDOM, document.getElementById('PopoverPagePlacement'))
    renderPopoverPageTriggerType(ReactDOM, document.getElementById('PopoverPageTriggerType'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Popover</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-popover-demo-arrow-point-at-center">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Arrow pointing</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="PopoverPageArrowpointatcenter" />
                    </div>
                  </div>
                  <div className="card" id="components-popover-demo-control">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Controlling the close of the dialog</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="PopoverPageControl" />
                    </div>
                  </div>
                  <div className="card" id="components-popover-demo-triggerType">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Three ways to trigger</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="PopoverPageTriggerType" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-popover-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="PopoverPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-popover-demo-placement">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Placement</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="PopoverPagePlacement" />
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

export default PopoverPageItems
