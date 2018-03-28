import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderSpinPageBasic } from './basic.js'
import { default as renderSpinPageCustomindicator } from './custom-indicator.js'
import { default as renderSpinPageDelayAndDebounce } from './delayAndDebounce.js'
import { default as renderSpinPageInside } from './inside.js'
import { default as renderSpinPageNested } from './nested.js'
import { default as renderSpinPageSize } from './size.js'
import { default as renderSpinPageTip } from './tip.js'

class SpinPageItems extends React.Component {
  componentDidMount() {
    renderSpinPageBasic(ReactDOM, document.getElementById('SpinPageBasic'))
    renderSpinPageCustomindicator(ReactDOM, document.getElementById('SpinPageCustomindicator'))
    renderSpinPageDelayAndDebounce(ReactDOM, document.getElementById('SpinPageDelayAndDebounce'))
    renderSpinPageInside(ReactDOM, document.getElementById('SpinPageInside'))
    renderSpinPageNested(ReactDOM, document.getElementById('SpinPageNested'))
    renderSpinPageSize(ReactDOM, document.getElementById('SpinPageSize'))
    renderSpinPageTip(ReactDOM, document.getElementById('SpinPageTip'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Spin</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-spin-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>basic Usage</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-spin-demo-delayAndDebounce">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>delay</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageDelayAndDebounce" />
                    </div>
                  </div>
                  <div className="card" id="components-spin-demo-nested">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Embedded mode</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageNested" />
                    </div>
                  </div>
                  <div className="card" id="components-spin-demo-tip">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customized description</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageTip" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-spin-demo-custom-indicator">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom spinning indicator</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageCustomindicator" />
                    </div>
                  </div>
                  <div className="card" id="components-spin-demo-inside">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Inside a container</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageInside" />
                    </div>
                  </div>
                  <div className="card" id="components-spin-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Size</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SpinPageSize" />
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

export default SpinPageItems
