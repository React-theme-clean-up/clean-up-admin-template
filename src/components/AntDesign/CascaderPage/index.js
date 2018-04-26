import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderCascaderPageBasic } from './basic.js'
import { default as renderCascaderPageChangeonselect } from './change-on-select.js'
import { default as renderCascaderPageCustomrender } from './custom-render.js'
import { default as renderCascaderPageCustomtrigger } from './custom-trigger.js'
import { default as renderCascaderPageDefaultvalue } from './default-value.js'
import { default as renderCascaderPageDisabledoption } from './disabled-option.js'
import { default as renderCascaderPageHover } from './hover.js'
import { default as renderCascaderPageLazy } from './lazy.js'
import { default as renderCascaderPageSearch } from './search.js'
import { default as renderCascaderPageSize } from './size.js'

class CascaderPageItems extends React.Component {
  componentDidMount() {
    renderCascaderPageBasic(ReactDOM, document.getElementById('CascaderPageBasic'))
    renderCascaderPageChangeonselect(
      ReactDOM,
      document.getElementById('CascaderPageChangeonselect'),
    )
    renderCascaderPageCustomrender(ReactDOM, document.getElementById('CascaderPageCustomrender'))
    renderCascaderPageCustomtrigger(ReactDOM, document.getElementById('CascaderPageCustomtrigger'))
    renderCascaderPageDefaultvalue(ReactDOM, document.getElementById('CascaderPageDefaultvalue'))
    renderCascaderPageDisabledoption(
      ReactDOM,
      document.getElementById('CascaderPageDisabledoption'),
    )
    renderCascaderPageHover(ReactDOM, document.getElementById('CascaderPageHover'))
    renderCascaderPageLazy(ReactDOM, document.getElementById('CascaderPageLazy'))
    renderCascaderPageSearch(ReactDOM, document.getElementById('CascaderPageSearch'))
    renderCascaderPageSize(ReactDOM, document.getElementById('CascaderPageSize'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Cascader</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-cascader-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-custom-render">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom render</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageCustomrender" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-default-value">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Default value</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageDefaultvalue" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-hover">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Hover</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageHover" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-search">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Search</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageSearch" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-cascader-demo-change-on-select">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Change on select</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageChangeonselect" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-custom-trigger">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom trigger</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageCustomtrigger" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-disabled-option">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Disabled option</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageDisabledoption" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-lazy">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Load Options Lazily</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageLazy" />
                    </div>
                  </div>
                  <div className="card" id="components-cascader-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Size</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CascaderPageSize" />
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

export default CascaderPageItems
