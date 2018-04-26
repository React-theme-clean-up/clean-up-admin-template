import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderRatePageBasic } from './basic.js'
import { default as renderRatePageCharacter } from './character.js'
import { default as renderRatePageClear } from './clear.js'
import { default as renderRatePageDisabled } from './disabled.js'
import { default as renderRatePageHalf } from './half.js'
import { default as renderRatePageText } from './text.js'

class RatePageItems extends React.Component {
  componentDidMount() {
    renderRatePageBasic(ReactDOM, document.getElementById('RatePageBasic'))
    renderRatePageCharacter(ReactDOM, document.getElementById('RatePageCharacter'))
    renderRatePageClear(ReactDOM, document.getElementById('RatePageClear'))
    renderRatePageDisabled(ReactDOM, document.getElementById('RatePageDisabled'))
    renderRatePageHalf(ReactDOM, document.getElementById('RatePageHalf'))
    renderRatePageText(ReactDOM, document.getElementById('RatePageText'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Rate</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-rate-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-rate-demo-clear">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Clear star</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageClear" />
                    </div>
                  </div>
                  <div className="card" id="components-rate-demo-half">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Half star</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageHalf" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-rate-demo-character">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Other Character</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageCharacter" />
                    </div>
                  </div>
                  <div className="card" id="components-rate-demo-disabled">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Read only</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageDisabled" />
                    </div>
                  </div>
                  <div className="card" id="components-rate-demo-text">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Show copywriting</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="RatePageText" />
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

export default RatePageItems
