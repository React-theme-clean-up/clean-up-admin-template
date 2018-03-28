import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderSelectPageAutomatictokenization } from './automatic-tokenization.js'
import { default as renderSelectPageBasic } from './basic.js'
import { default as renderSelectPageCombobox } from './combobox.js'
import { default as renderSelectPageCoordinate } from './coordinate.js'
import { default as renderSelectPageLabelinvalue } from './label-in-value.js'
import { default as renderSelectPageMultiple } from './multiple.js'
import { default as renderSelectPageOptgroup } from './optgroup.js'
import { default as renderSelectPageSearchbox } from './search-box.js'
import { default as renderSelectPageSearch } from './search.js'
import { default as renderSelectPageSelectusers } from './select-users.js'
import { default as renderSelectPageSize } from './size.js'
import { default as renderSelectPageTags } from './tags.js'

class SelectPageItems extends React.Component {
  componentDidMount() {
    renderSelectPageAutomatictokenization(
      ReactDOM,
      document.getElementById('SelectPageAutomatictokenization'),
    )
    renderSelectPageBasic(ReactDOM, document.getElementById('SelectPageBasic'))
    renderSelectPageCombobox(ReactDOM, document.getElementById('SelectPageCombobox'))
    renderSelectPageCoordinate(ReactDOM, document.getElementById('SelectPageCoordinate'))
    renderSelectPageLabelinvalue(ReactDOM, document.getElementById('SelectPageLabelinvalue'))
    renderSelectPageMultiple(ReactDOM, document.getElementById('SelectPageMultiple'))
    renderSelectPageOptgroup(ReactDOM, document.getElementById('SelectPageOptgroup'))
    renderSelectPageSearchbox(ReactDOM, document.getElementById('SelectPageSearchbox'))
    renderSelectPageSearch(ReactDOM, document.getElementById('SelectPageSearch'))
    renderSelectPageSelectusers(ReactDOM, document.getElementById('SelectPageSelectusers'))
    renderSelectPageSize(ReactDOM, document.getElementById('SelectPageSize'))
    renderSelectPageTags(ReactDOM, document.getElementById('SelectPageTags'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Select</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-select-demo-automatic-tokenization">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Automatic tokenization</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageAutomatictokenization" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-combobox">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Automatic completion</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageCombobox" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-label-in-value">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Get value of selected item</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageLabelinvalue" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-optgroup">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Option Group</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageOptgroup" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-search">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Select with search field</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageSearch" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Sizes</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageSize" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-select-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic Usage</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-coordinate">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>coordinate</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageCoordinate" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-multiple">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>multiple selection</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageMultiple" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-search-box">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Search Box</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageSearchbox" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-select-users">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Search and Select Users</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageSelectusers" />
                    </div>
                  </div>
                  <div className="card" id="components-select-demo-tags">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Tags</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="SelectPageTags" />
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

export default SelectPageItems
