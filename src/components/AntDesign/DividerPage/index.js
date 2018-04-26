import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderDividerPageHorizontal } from './horizontal.js'
import { default as renderDividerPageVertical } from './vertical.js'

class DividerPageItems extends React.Component {
  componentDidMount() {
    renderDividerPageHorizontal(ReactDOM, document.getElementById('DividerPageHorizontal'))
    renderDividerPageVertical(ReactDOM, document.getElementById('DividerPageVertical'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Divider</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-divider-demo-horizontal">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Horizontal</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DividerPageHorizontal" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-divider-demo-vertical">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Vertical</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="DividerPageVertical" />
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

export default DividerPageItems
