import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderCollapsePageAccordion } from './accordion.js'
import { default as renderCollapsePageBasic } from './basic.js'
import { default as renderCollapsePageBorderless } from './borderless.js'
import { default as renderCollapsePageCustom } from './custom.js'
import { default as renderCollapsePageMix } from './mix.js'
import { default as renderCollapsePageNoarrow } from './noarrow.js'

class CollapsePageItems extends React.Component {
  componentDidMount() {
    renderCollapsePageAccordion(ReactDOM, document.getElementById('CollapsePageAccordion'))
    renderCollapsePageBasic(ReactDOM, document.getElementById('CollapsePageBasic'))
    renderCollapsePageBorderless(ReactDOM, document.getElementById('CollapsePageBorderless'))
    renderCollapsePageCustom(ReactDOM, document.getElementById('CollapsePageCustom'))
    renderCollapsePageMix(ReactDOM, document.getElementById('CollapsePageMix'))
    renderCollapsePageNoarrow(ReactDOM, document.getElementById('CollapsePageNoarrow'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Collapse</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-collapse-demo-accordion">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Accordion</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageAccordion" />
                    </div>
                  </div>
                  <div className="card" id="components-collapse-demo-borderless">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Borderless</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageBorderless" />
                    </div>
                  </div>
                  <div className="card" id="components-collapse-demo-mix">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Nested panel</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageMix" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-collapse-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Collapse</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-collapse-demo-custom">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom Panel</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageCustom" />
                    </div>
                  </div>
                  <div className="card" id="components-collapse-demo-noarrow">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>No arrow</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CollapsePageNoarrow" />
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

export default CollapsePageItems
