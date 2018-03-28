import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderRadioPageBasic } from './basic.js';
import { default as renderRadioPageDisable } from './disable.js';
import { default as renderRadioPageRadiobutton } from './radiobutton.js';
import { default as renderRadioPageRadiogroupmore } from './radiogroup-more.js';
import { default as renderRadioPageRadiogroupoptions } from './radiogroup-options.js';
import { default as renderRadioPageRadiogroupwithname } from './radiogroup-with-name.js';
import { default as renderRadioPageRadiogroup } from './radiogroup.js';
import { default as renderRadioPageSize } from './size.js';


class RadioPageItems extends React.Component {

  componentDidMount() {
    renderRadioPageBasic(ReactDOM, document.getElementById("RadioPageBasic"));
renderRadioPageDisable(ReactDOM, document.getElementById("RadioPageDisable"));
renderRadioPageRadiobutton(ReactDOM, document.getElementById("RadioPageRadiobutton"));
renderRadioPageRadiogroupmore(ReactDOM, document.getElementById("RadioPageRadiogroupmore"));
renderRadioPageRadiogroupoptions(ReactDOM, document.getElementById("RadioPageRadiogroupoptions"));
renderRadioPageRadiogroupwithname(ReactDOM, document.getElementById("RadioPageRadiogroupwithname"));
renderRadioPageRadiogroup(ReactDOM, document.getElementById("RadioPageRadiogroup"));
renderRadioPageSize(ReactDOM, document.getElementById("RadioPageSize"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Radio</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-radio-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageBasic" />
  </div>
</div>
<div className="card" id="components-radio-demo-radiobutton">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>radio style</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageRadiobutton" />
  </div>
</div>
<div className="card" id="components-radio-demo-radiogroup-options">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>RadioGroup group</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageRadiogroupoptions" />
  </div>
</div>
<div className="card" id="components-radio-demo-radiogroup">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Radio Group</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageRadiogroup" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-radio-demo-disable">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>disabled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageDisable" />
  </div>
</div>
<div className="card" id="components-radio-demo-radiogroup-more">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical RadioGroup</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageRadiogroupmore" />
  </div>
</div>
<div className="card" id="components-radio-demo-radiogroup-with-name">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>RadioGroup with name</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageRadiogroupwithname" />
  </div>
</div>
<div className="card" id="components-radio-demo-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Size</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="RadioPageSize" />
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

export default RadioPageItems
