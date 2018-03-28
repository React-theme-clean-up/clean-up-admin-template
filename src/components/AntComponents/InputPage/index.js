import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderInputPageAddon } from './addon.js';
import { default as renderInputPageAutosizetextarea } from './autosize-textarea.js';
import { default as renderInputPageBasic } from './basic.js';
import { default as renderInputPageGroup } from './group.js';
import { default as renderInputPagePresuffix } from './presuffix.js';
import { default as renderInputPageSearchinput } from './search-input.js';
import { default as renderInputPageSize } from './size.js';
import { default as renderInputPageTextarea } from './textarea.js';
import { default as renderInputPageTooltip } from './tooltip.js';


class InputPageItems extends React.Component {

  componentDidMount() {
    renderInputPageAddon(ReactDOM, document.getElementById("InputPageAddon"));
renderInputPageAutosizetextarea(ReactDOM, document.getElementById("InputPageAutosizetextarea"));
renderInputPageBasic(ReactDOM, document.getElementById("InputPageBasic"));
renderInputPageGroup(ReactDOM, document.getElementById("InputPageGroup"));
renderInputPagePresuffix(ReactDOM, document.getElementById("InputPagePresuffix"));
renderInputPageSearchinput(ReactDOM, document.getElementById("InputPageSearchinput"));
renderInputPageSize(ReactDOM, document.getElementById("InputPageSize"));
renderInputPageTextarea(ReactDOM, document.getElementById("InputPageTextarea"));
renderInputPageTooltip(ReactDOM, document.getElementById("InputPageTooltip"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Input</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-input-demo-addon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Pre</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageAddon" />
  </div>
</div>
<div className="card" id="components-input-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic usage</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageBasic" />
  </div>
</div>
<div className="card" id="components-input-demo-presuffix">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>prefix and suffix</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPagePresuffix" />
  </div>
</div>
<div className="card" id="components-input-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Three sizes of Input</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageSize" />
  </div>
</div>
<div className="card" id="components-input-demo-tooltip">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Format Tooltip Input</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageTooltip" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-input-demo-autosize-textarea">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Autosizing the height to fit the content</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageAutosizetextarea" />
  </div>
</div>
<div className="card" id="components-input-demo-group">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Input Group</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageGroup" />
  </div>
</div>
<div className="card" id="components-input-demo-search-input">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Search box</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageSearchinput" />
  </div>
</div>
<div className="card" id="components-input-demo-textarea">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>TextArea</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="InputPageTextarea" />
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

export default InputPageItems
