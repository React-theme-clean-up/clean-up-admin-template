import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderAlertPageBanner } from './banner.js'
import { default as renderAlertPageBasic } from './basic.js'
import { default as renderAlertPageClosable } from './closable.js'
import { default as renderAlertPageClosetext } from './close-text.js'
import { default as renderAlertPageDescription } from './description.js'
import { default as renderAlertPageIcon } from './icon.js'
import { default as renderAlertPageSmoothclosed } from './smooth-closed.js'
import { default as renderAlertPageStyle } from './style.js'

class AlertPageItems extends React.Component {
  componentDidMount() {
    renderAlertPageBanner(ReactDOM, document.getElementById('AlertPageBanner'))
    renderAlertPageBasic(ReactDOM, document.getElementById('AlertPageBasic'))
    renderAlertPageClosable(ReactDOM, document.getElementById('AlertPageClosable'))
    renderAlertPageClosetext(ReactDOM, document.getElementById('AlertPageClosetext'))
    renderAlertPageDescription(ReactDOM, document.getElementById('AlertPageDescription'))
    renderAlertPageIcon(ReactDOM, document.getElementById('AlertPageIcon'))
    renderAlertPageSmoothclosed(ReactDOM, document.getElementById('AlertPageSmoothclosed'))
    renderAlertPageStyle(ReactDOM, document.getElementById('AlertPageStyle'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Alert</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-alert-demo-banner">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Banner</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageBanner" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-closable">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Closable</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageClosable" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-description">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Description</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageDescription" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-smooth-closed">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Smoothly Unmount</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageSmoothclosed" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-alert-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-close-text">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customized Close Text</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageClosetext" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-icon">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Icon</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageIcon" />
                    </div>
                  </div>
                  <div className="card" id="components-alert-demo-style">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>More types</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AlertPageStyle" />
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

export default AlertPageItems
