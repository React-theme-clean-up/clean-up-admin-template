import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderTooltipPageArrowpointatcenter } from './arrow-point-at-center.js'
import { default as renderTooltipPageAutoadjustoverflow } from './auto-adjust-overflow.js'
import { default as renderTooltipPageBasic } from './basic.js'
import { default as renderTooltipPagePlacement } from './placement.js'

class TooltipPageItems extends React.Component {
  componentDidMount() {
    renderTooltipPageArrowpointatcenter(
      ReactDOM,
      document.getElementById('TooltipPageArrowpointatcenter'),
    )
    renderTooltipPageAutoadjustoverflow(
      ReactDOM,
      document.getElementById('TooltipPageAutoadjustoverflow'),
    )
    renderTooltipPageBasic(ReactDOM, document.getElementById('TooltipPageBasic'))
    renderTooltipPagePlacement(ReactDOM, document.getElementById('TooltipPagePlacement'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Tooltip</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-tooltip-demo-arrow-point-at-center">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Arrow pointing at the center</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TooltipPageArrowpointatcenter" />
                    </div>
                  </div>
                  <div className="card" id="components-tooltip-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TooltipPageBasic" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-tooltip-demo-auto-adjust-overflow">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Adjust placement automatically</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TooltipPageAutoadjustoverflow" />
                    </div>
                  </div>
                  <div className="card" id="components-tooltip-demo-placement">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Placement</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TooltipPagePlacement" />
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

export default TooltipPageItems
