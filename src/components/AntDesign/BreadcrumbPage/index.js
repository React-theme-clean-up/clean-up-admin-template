import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderBreadcrumbPageBasic } from './basic.js'
import { default as renderBreadcrumbPageRouter4 } from './router-4.js'
import { default as renderBreadcrumbPageRouter } from './router.js'
import { default as renderBreadcrumbPageSeparator } from './separator.js'
import { default as renderBreadcrumbPageWithIcon } from './withIcon.js'

class BreadcrumbPageItems extends React.Component {
  componentDidMount() {
    renderBreadcrumbPageBasic(ReactDOM, document.getElementById('BreadcrumbPageBasic'))
    renderBreadcrumbPageRouter4(ReactDOM, document.getElementById('BreadcrumbPageRouter4'))
    renderBreadcrumbPageRouter(ReactDOM, document.getElementById('BreadcrumbPageRouter'))
    renderBreadcrumbPageSeparator(ReactDOM, document.getElementById('BreadcrumbPageSeparator'))
    renderBreadcrumbPageWithIcon(ReactDOM, document.getElementById('BreadcrumbPageWithIcon'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Breadcrumb</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-breadcrumb-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic Usage</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BreadcrumbPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-breadcrumb-demo-router">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>React Router Integration</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BreadcrumbPageRouter" />
                    </div>
                  </div>
                  <div className="card" id="components-breadcrumb-demo-withIcon">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>With an Icon</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BreadcrumbPageWithIcon" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-breadcrumb-demo-router-4">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Other Router Integration</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BreadcrumbPageRouter4" />
                    </div>
                  </div>
                  <div className="card" id="components-breadcrumb-demo-separator">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Configuring the Separator</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BreadcrumbPageSeparator" />
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

export default BreadcrumbPageItems
