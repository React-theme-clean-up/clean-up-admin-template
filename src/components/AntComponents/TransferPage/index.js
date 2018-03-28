import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTransferPageAdvanced } from './advanced.js';
import { default as renderTransferPageBasic } from './basic.js';
import { default as renderTransferPageCustomitem } from './custom-item.js';
import { default as renderTransferPageLargedata } from './large-data.js';
import { default as renderTransferPageSearch } from './search.js';


class TransferPageItems extends React.Component {

  componentDidMount() {
    renderTransferPageAdvanced(ReactDOM, document.getElementById("TransferPageAdvanced"));
renderTransferPageBasic(ReactDOM, document.getElementById("TransferPageBasic"));
renderTransferPageCustomitem(ReactDOM, document.getElementById("TransferPageCustomitem"));
renderTransferPageLargedata(ReactDOM, document.getElementById("TransferPageLargedata"));
renderTransferPageSearch(ReactDOM, document.getElementById("TransferPageSearch"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Transfer</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-transfer-demo-advanced">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Advanced</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TransferPageAdvanced" />
  </div>
</div>
<div className="card" id="components-transfer-demo-custom-item">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Custom datasource</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TransferPageCustomitem" />
  </div>
</div>
<div className="card" id="components-transfer-demo-search">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Search</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TransferPageSearch" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-transfer-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TransferPageBasic" />
  </div>
</div>
<div className="card" id="components-transfer-demo-large-data">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Performance Test</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TransferPageLargedata" />
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

export default TransferPageItems
