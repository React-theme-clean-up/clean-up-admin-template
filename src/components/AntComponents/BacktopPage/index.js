import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderBacktopPageBasic } from './basic.js'
import { default as renderBacktopPageCustom } from './custom.js'

class BacktopPageItems extends React.Component {
  componentDidMount() {
    renderBacktopPageBasic(ReactDOM, document.getElementById('BacktopPageBasic'))
    renderBacktopPageCustom(ReactDOM, document.getElementById('BacktopPageCustom'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>BackTop</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-back-top-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BacktopPageBasic" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-back-top-demo-custom">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom style</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BacktopPageCustom" />
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

export default BacktopPageItems
