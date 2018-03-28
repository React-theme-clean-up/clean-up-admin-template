import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderCheckboxPageBasic } from './basic.js'
import { default as renderCheckboxPageCheckall } from './check-all.js'
import { default as renderCheckboxPageController } from './controller.js'
import { default as renderCheckboxPageDisabled } from './disabled.js'
import { default as renderCheckboxPageGroup } from './group.js'
import { default as renderCheckboxPageLayout } from './layout.js'

class CheckboxPageItems extends React.Component {
  componentDidMount() {
    renderCheckboxPageBasic(ReactDOM, document.getElementById('CheckboxPageBasic'))
    renderCheckboxPageCheckall(ReactDOM, document.getElementById('CheckboxPageCheckall'))
    renderCheckboxPageController(ReactDOM, document.getElementById('CheckboxPageController'))
    renderCheckboxPageDisabled(ReactDOM, document.getElementById('CheckboxPageDisabled'))
    renderCheckboxPageGroup(ReactDOM, document.getElementById('CheckboxPageGroup'))
    renderCheckboxPageLayout(ReactDOM, document.getElementById('CheckboxPageLayout'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Checkbox</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-checkbox-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-checkbox-demo-controller">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Controlled Checkbox</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageController" />
                    </div>
                  </div>
                  <div className="card" id="components-checkbox-demo-group">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Checkbox Group</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageGroup" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-checkbox-demo-check-all">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Check all</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageCheckall" />
                    </div>
                  </div>
                  <div className="card" id="components-checkbox-demo-disabled">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Disabled</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageDisabled" />
                    </div>
                  </div>
                  <div className="card" id="components-checkbox-demo-layout">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Use with Grid</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CheckboxPageLayout" />
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

export default CheckboxPageItems
