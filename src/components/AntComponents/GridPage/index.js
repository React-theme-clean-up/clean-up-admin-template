import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderGridPageBasic } from './basic.js'
import { default as renderGridPageFlexalign } from './flex-align.js'
import { default as renderGridPageFlexorder } from './flex-order.js'
import { default as renderGridPageFlex } from './flex.js'
import { default as renderGridPageGutter } from './gutter.js'
import { default as renderGridPageOffset } from './offset.js'
import { default as renderGridPagePlayground } from './playground.js'
import { default as renderGridPageResponsivemore } from './responsive-more.js'
import { default as renderGridPageResponsive } from './responsive.js'
import { default as renderGridPageSort } from './sort.js'

class GridPageItems extends React.Component {
  componentDidMount() {
    renderGridPageBasic(ReactDOM, document.getElementById('GridPageBasic'))
    renderGridPageFlexalign(ReactDOM, document.getElementById('GridPageFlexalign'))
    renderGridPageFlexorder(ReactDOM, document.getElementById('GridPageFlexorder'))
    renderGridPageFlex(ReactDOM, document.getElementById('GridPageFlex'))
    renderGridPageGutter(ReactDOM, document.getElementById('GridPageGutter'))
    renderGridPageOffset(ReactDOM, document.getElementById('GridPageOffset'))
    renderGridPagePlayground(ReactDOM, document.getElementById('GridPagePlayground'))
    renderGridPageResponsivemore(ReactDOM, document.getElementById('GridPageResponsivemore'))
    renderGridPageResponsive(ReactDOM, document.getElementById('GridPageResponsive'))
    renderGridPageSort(ReactDOM, document.getElementById('GridPageSort'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Grid</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-grid-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic Grid</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-flex-order">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Flex Order</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageFlexorder" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-gutter">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Grid Gutter</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageGutter" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-playground">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Playground</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPagePlayground" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-responsive">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Responsive</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageResponsive" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-grid-demo-flex-align">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Flex Alignment</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageFlexalign" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-flex">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Flex Layout</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageFlex" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-offset">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Column offset</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageOffset" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-responsive-more">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>More responsive</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageResponsivemore" />
                    </div>
                  </div>
                  <div className="card" id="components-grid-demo-sort">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Grid sort</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="GridPageSort" />
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

export default GridPageItems
