import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderProgressPageCircledynamic } from './circle-dynamic.js'
import { default as renderProgressPageCirclemini } from './circle-mini.js'
import { default as renderProgressPageCircle } from './circle.js'
import { default as renderProgressPageDashboard } from './dashboard.js'
import { default as renderProgressPageDynamic } from './dynamic.js'
import { default as renderProgressPageFormat } from './format.js'
import { default as renderProgressPageLinemini } from './line-mini.js'
import { default as renderProgressPageLine } from './line.js'
import { default as renderProgressPageSegment } from './segment.js'

class ProgressPageItems extends React.Component {
  componentDidMount() {
    renderProgressPageCircledynamic(ReactDOM, document.getElementById('ProgressPageCircledynamic'))
    renderProgressPageCirclemini(ReactDOM, document.getElementById('ProgressPageCirclemini'))
    renderProgressPageCircle(ReactDOM, document.getElementById('ProgressPageCircle'))
    renderProgressPageDashboard(ReactDOM, document.getElementById('ProgressPageDashboard'))
    renderProgressPageDynamic(ReactDOM, document.getElementById('ProgressPageDynamic'))
    renderProgressPageFormat(ReactDOM, document.getElementById('ProgressPageFormat'))
    renderProgressPageLinemini(ReactDOM, document.getElementById('ProgressPageLinemini'))
    renderProgressPageLine(ReactDOM, document.getElementById('ProgressPageLine'))
    renderProgressPageSegment(ReactDOM, document.getElementById('ProgressPageSegment'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Progress</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-progress-demo-circle-dynamic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Dynamic circular progress bar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageCircledynamic" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-circle">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Circular progress bar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageCircle" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-dynamic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Dynamic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageDynamic" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-line-mini">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Mini size progress bar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageLinemini" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-segment">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Progress bar with success segment</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageSegment" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-progress-demo-circle-mini">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Mini size circular progress bar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageCirclemini" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-dashboard">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Dashboard</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageDashboard" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-format">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom text format</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageFormat" />
                    </div>
                  </div>
                  <div className="card" id="components-progress-demo-line">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Progress bar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="ProgressPageLine" />
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

export default ProgressPageItems
