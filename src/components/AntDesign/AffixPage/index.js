import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderAffixPageBasic } from './basic.js'
import { default as renderAffixPageOnchange } from './on-change.js'
import { default as renderAffixPageTarget } from './target.js'

class AffixPageItems extends React.Component {
  componentDidMount() {
    renderAffixPageBasic(ReactDOM, document.getElementById('AffixPageBasic'))
    renderAffixPageOnchange(ReactDOM, document.getElementById('AffixPageOnchange'))
    renderAffixPageTarget(ReactDOM, document.getElementById('AffixPageTarget'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Affix</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-affix-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AffixPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-affix-demo-target">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Container to</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AffixPageTarget" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-affix-demo-on-change">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Callback</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AffixPageOnchange" />
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

export default AffixPageItems
