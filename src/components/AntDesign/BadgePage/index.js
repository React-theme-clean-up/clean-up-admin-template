import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderBadgePageBasic } from './basic.js'
import { default as renderBadgePageChange } from './change.js'
import { default as renderBadgePageDot } from './dot.js'
import { default as renderBadgePageLink } from './link.js'
import { default as renderBadgePageNowrapper } from './no-wrapper.js'
import { default as renderBadgePageOverflow } from './overflow.js'
import { default as renderBadgePageStatus } from './status.js'

class BadgePageItems extends React.Component {
  componentDidMount() {
    renderBadgePageBasic(ReactDOM, document.getElementById('BadgePageBasic'))
    renderBadgePageChange(ReactDOM, document.getElementById('BadgePageChange'))
    renderBadgePageDot(ReactDOM, document.getElementById('BadgePageDot'))
    renderBadgePageLink(ReactDOM, document.getElementById('BadgePageLink'))
    renderBadgePageNowrapper(ReactDOM, document.getElementById('BadgePageNowrapper'))
    renderBadgePageOverflow(ReactDOM, document.getElementById('BadgePageOverflow'))
    renderBadgePageStatus(ReactDOM, document.getElementById('BadgePageStatus'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Badge</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-badge-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-badge-demo-dot">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Red badge</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageDot" />
                    </div>
                  </div>
                  <div className="card" id="components-badge-demo-no-wrapper">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Standalone</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageNowrapper" />
                    </div>
                  </div>
                  <div className="card" id="components-badge-demo-status">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Status</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageStatus" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-badge-demo-change">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Dynamic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageChange" />
                    </div>
                  </div>
                  <div className="card" id="components-badge-demo-link">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Clickable</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageLink" />
                    </div>
                  </div>
                  <div className="card" id="components-badge-demo-overflow">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Overflow Count</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="BadgePageOverflow" />
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

export default BadgePageItems
