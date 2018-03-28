import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderMessagePageDuration } from './duration.js'
import { default as renderMessagePageInfo } from './info.js'
import { default as renderMessagePageLoading } from './loading.js'
import { default as renderMessagePageOther } from './other.js'

class MessagePageItems extends React.Component {
  componentDidMount() {
    renderMessagePageDuration(ReactDOM, document.getElementById('MessagePageDuration'))
    renderMessagePageInfo(ReactDOM, document.getElementById('MessagePageInfo'))
    renderMessagePageLoading(ReactDOM, document.getElementById('MessagePageLoading'))
    renderMessagePageOther(ReactDOM, document.getElementById('MessagePageOther'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Message</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-message-demo-duration">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customize duration</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MessagePageDuration" />
                    </div>
                  </div>
                  <div className="card" id="components-message-demo-loading">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Message of loading</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MessagePageLoading" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-message-demo-info">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Normal prompt</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MessagePageInfo" />
                    </div>
                  </div>
                  <div className="card" id="components-message-demo-other">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Other types of message</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MessagePageOther" />
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

export default MessagePageItems
