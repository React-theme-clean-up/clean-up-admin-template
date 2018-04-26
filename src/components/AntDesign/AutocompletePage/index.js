import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderAutocompletePageBasic } from './basic.js'
import { default as renderAutocompletePageCertaincategory } from './certain-category.js'
import { default as renderAutocompletePageCustom } from './custom.js'
import { default as renderAutocompletePageNoncasesensitive } from './non-case-sensitive.js'
import { default as renderAutocompletePageOptions } from './options.js'
import { default as renderAutocompletePageUncertaincategory } from './uncertain-category.js'

class AutocompletePageItems extends React.Component {
  componentDidMount() {
    renderAutocompletePageBasic(ReactDOM, document.getElementById('AutocompletePageBasic'))
    renderAutocompletePageCertaincategory(
      ReactDOM,
      document.getElementById('AutocompletePageCertaincategory'),
    )
    renderAutocompletePageCustom(ReactDOM, document.getElementById('AutocompletePageCustom'))
    renderAutocompletePageNoncasesensitive(
      ReactDOM,
      document.getElementById('AutocompletePageNoncasesensitive'),
    )
    renderAutocompletePageOptions(ReactDOM, document.getElementById('AutocompletePageOptions'))
    renderAutocompletePageUncertaincategory(
      ReactDOM,
      document.getElementById('AutocompletePageUncertaincategory'),
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>AutoComplete</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-auto-complete-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic Usage</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-auto-complete-demo-custom">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customize Input Component</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageCustom" />
                    </div>
                  </div>
                  <div className="card" id="components-auto-complete-demo-options">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customized</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageOptions" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-auto-complete-demo-certain-category">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong />
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageCertaincategory" />
                    </div>
                  </div>
                  <div className="card" id="components-auto-complete-demo-non-case-sensitive">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong />
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageNoncasesensitive" />
                    </div>
                  </div>
                  <div className="card" id="components-auto-complete-demo-uncertain-category">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong />
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="AutocompletePageUncertaincategory" />
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

export default AutocompletePageItems
