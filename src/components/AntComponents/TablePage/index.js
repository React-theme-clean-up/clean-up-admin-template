import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderTablePageAjax } from './ajax.js'
import { default as renderTablePageBasic } from './basic.js'
import { default as renderTablePageBordered } from './bordered.js'
import { default as renderTablePageColspanrowspan } from './colspan-rowspan.js'
import { default as renderTablePageCustomfilterpanel } from './custom-filter-panel.js'
import { default as renderTablePageDragsorting } from './drag-sorting.js'
import { default as renderTablePageDynamicsettings } from './dynamic-settings.js'
import { default as renderTablePageEditcell } from './edit-cell.js'
import { default as renderTablePageEditrow } from './edit-row.js'
import { default as renderTablePageExpandchildren } from './expand-children.js'
import { default as renderTablePageExpand } from './expand.js'
import { default as renderTablePageFixedcolumnsheader } from './fixed-columns-header.js'
import { default as renderTablePageFixedcolumns } from './fixed-columns.js'
import { default as renderTablePageFixedheader } from './fixed-header.js'
import { default as renderTablePageGroupingcolumns } from './grouping-columns.js'
import { default as renderTablePageHead } from './head.js'
import { default as renderTablePageJsx } from './jsx.js'
import { default as renderTablePageNestedtable } from './nested-table.js'
import { default as renderTablePageResetfilter } from './reset-filter.js'
import { default as renderTablePageRowselectionandoperation } from './row-selection-and-operation.js'
import { default as renderTablePageRowselectioncustom } from './row-selection-custom.js'
import { default as renderTablePageRowselection } from './row-selection.js'
import { default as renderTablePageSize } from './size.js'

class TablePageItems extends React.Component {
  componentDidMount() {
    renderTablePageAjax(ReactDOM, document.getElementById('TablePageAjax'))
    renderTablePageBasic(ReactDOM, document.getElementById('TablePageBasic'))
    renderTablePageBordered(ReactDOM, document.getElementById('TablePageBordered'))
    renderTablePageColspanrowspan(ReactDOM, document.getElementById('TablePageColspanrowspan'))
    renderTablePageCustomfilterpanel(
      ReactDOM,
      document.getElementById('TablePageCustomfilterpanel'),
    )
    renderTablePageDragsorting(ReactDOM, document.getElementById('TablePageDragsorting'))
    renderTablePageDynamicsettings(ReactDOM, document.getElementById('TablePageDynamicsettings'))
    renderTablePageEditcell(ReactDOM, document.getElementById('TablePageEditcell'))
    renderTablePageEditrow(ReactDOM, document.getElementById('TablePageEditrow'))
    renderTablePageExpandchildren(ReactDOM, document.getElementById('TablePageExpandchildren'))
    renderTablePageExpand(ReactDOM, document.getElementById('TablePageExpand'))
    renderTablePageFixedcolumnsheader(
      ReactDOM,
      document.getElementById('TablePageFixedcolumnsheader'),
    )
    renderTablePageFixedcolumns(ReactDOM, document.getElementById('TablePageFixedcolumns'))
    renderTablePageFixedheader(ReactDOM, document.getElementById('TablePageFixedheader'))
    renderTablePageGroupingcolumns(ReactDOM, document.getElementById('TablePageGroupingcolumns'))
    renderTablePageHead(ReactDOM, document.getElementById('TablePageHead'))
    renderTablePageJsx(ReactDOM, document.getElementById('TablePageJsx'))
    renderTablePageNestedtable(ReactDOM, document.getElementById('TablePageNestedtable'))
    renderTablePageResetfilter(ReactDOM, document.getElementById('TablePageResetfilter'))
    renderTablePageRowselectionandoperation(
      ReactDOM,
      document.getElementById('TablePageRowselectionandoperation'),
    )
    renderTablePageRowselectioncustom(
      ReactDOM,
      document.getElementById('TablePageRowselectioncustom'),
    )
    renderTablePageRowselection(ReactDOM, document.getElementById('TablePageRowselection'))
    renderTablePageSize(ReactDOM, document.getElementById('TablePageSize'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Table</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-table-demo-ajax">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Ajax</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageAjax" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-bordered">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong />
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageBordered" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-custom-filter-panel">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customized filter panel</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageCustomfilterpanel" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-dynamic-settings">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Dynamic Settings</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageDynamicsettings" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-edit-row">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Editable Rows</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageEditrow" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-expand">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Expandable Row</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageExpand" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-fixed-columns">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Fixed Columns</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageFixedcolumns" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-grouping-columns">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Grouping table head</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageGroupingcolumns" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-jsx">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>JSX style API</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageJsx" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-reset-filter">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Reset filters and sorters</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageResetfilter" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-row-selection-custom">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Custom selection</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageRowselectioncustom" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>size</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageSize" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-table-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic Usage</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-colspan-rowspan">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>colSpan and rowSpan</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageColspanrowspan" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-drag-sorting">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Drag sorting</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageDragsorting" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-edit-cell">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Editable Cells</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageEditcell" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-expand-children">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Tree data</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageExpandchildren" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-fixed-columns-header">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Fixed Columns and Header</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageFixedcolumnsheader" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-fixed-header">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Fixed Header</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageFixedheader" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-head">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Filter and sorter</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageHead" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-nested-table">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Nested tables</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageNestedtable" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-row-selection-and-operation">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Selection and operation</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageRowselectionandoperation" />
                    </div>
                  </div>
                  <div className="card" id="components-table-demo-row-selection">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>selection</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TablePageRowselection" />
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

export default TablePageItems
