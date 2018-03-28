import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderInputnumberPageBasic } from './basic.js'
import { default as renderInputnumberPageDigit } from './digit.js'
import { default as renderInputnumberPageDisabled } from './disabled.js'
import { default as renderInputnumberPageFormatter } from './formatter.js'
import { default as renderInputnumberPageSize } from './size.js'

class InputnumberPageItems extends React.Component {
  componentDidMount() {
    renderInputnumberPageBasic(ReactDOM, document.getElementById('InputnumberPageBasic'))
    renderInputnumberPageDigit(ReactDOM, document.getElementById('InputnumberPageDigit'))
    renderInputnumberPageDisabled(ReactDOM, document.getElementById('InputnumberPageDisabled'))
    renderInputnumberPageFormatter(ReactDOM, document.getElementById('InputnumberPageFormatter'))
    renderInputnumberPageSize(ReactDOM, document.getElementById('InputnumberPageSize'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>InputNumber</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-input-number-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="InputnumberPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-input-number-demo-disabled">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Disabled</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="InputnumberPageDisabled" />
                    </div>
                  </div>
                  <div className="card" id="components-input-number-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Sizes</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="InputnumberPageSize" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-input-number-demo-digit">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Decimals</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="InputnumberPageDigit" />
                    </div>
                  </div>
                  <div className="card" id="components-input-number-demo-formatter">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Formatter</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="InputnumberPageFormatter" />
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

export default InputnumberPageItems
