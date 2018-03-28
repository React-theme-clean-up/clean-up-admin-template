import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderFormPageAdvancedsearch } from './advanced-search.js';
import { default as renderFormPageCoordinated } from './coordinated.js';
import { default as renderFormPageCustomizedformcontrols } from './customized-form-controls.js';
import { default as renderFormPageDynamicformitem } from './dynamic-form-item.js';
import { default as renderFormPageDynamicrule } from './dynamic-rule.js';
import { default as renderFormPageForminmodal } from './form-in-modal.js';
import { default as renderFormPageGlobalstate } from './global-state.js';
import { default as renderFormPageHorizontallogin } from './horizontal-login.js';
import { default as renderFormPageLayout } from './layout.js';
import { default as renderFormPageNormallogin } from './normal-login.js';
import { default as renderFormPageRegister } from './register.js';
import { default as renderFormPageTimerelatedcontrols } from './time-related-controls.js';
import { default as renderFormPageValidateother } from './validate-other.js';
import { default as renderFormPageValidatestatic } from './validate-static.js';
import { default as renderFormPageWithoutformcreate } from './without-form-create.js';


class FormPageItems extends React.Component {

  componentDidMount() {
    renderFormPageAdvancedsearch(ReactDOM, document.getElementById("FormPageAdvancedsearch"));
renderFormPageCoordinated(ReactDOM, document.getElementById("FormPageCoordinated"));
renderFormPageCustomizedformcontrols(ReactDOM, document.getElementById("FormPageCustomizedformcontrols"));
renderFormPageDynamicformitem(ReactDOM, document.getElementById("FormPageDynamicformitem"));
renderFormPageDynamicrule(ReactDOM, document.getElementById("FormPageDynamicrule"));
renderFormPageForminmodal(ReactDOM, document.getElementById("FormPageForminmodal"));
renderFormPageGlobalstate(ReactDOM, document.getElementById("FormPageGlobalstate"));
renderFormPageHorizontallogin(ReactDOM, document.getElementById("FormPageHorizontallogin"));
renderFormPageLayout(ReactDOM, document.getElementById("FormPageLayout"));
renderFormPageNormallogin(ReactDOM, document.getElementById("FormPageNormallogin"));
renderFormPageRegister(ReactDOM, document.getElementById("FormPageRegister"));
renderFormPageTimerelatedcontrols(ReactDOM, document.getElementById("FormPageTimerelatedcontrols"));
renderFormPageValidateother(ReactDOM, document.getElementById("FormPageValidateother"));
renderFormPageValidatestatic(ReactDOM, document.getElementById("FormPageValidatestatic"));
renderFormPageWithoutformcreate(ReactDOM, document.getElementById("FormPageWithoutformcreate"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Form</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-form-demo-advanced-search">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Advanced search</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageAdvancedsearch" />
  </div>
</div>
<div className="card" id="components-form-demo-customized-form-controls">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Form Controls</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageCustomizedformcontrols" />
  </div>
</div>
<div className="card" id="components-form-demo-dynamic-rule">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Dynamic Rules</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageDynamicrule" />
  </div>
</div>
<div className="card" id="components-form-demo-global-state">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Store Form Data into Upper Component</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageGlobalstate" />
  </div>
</div>
<div className="card" id="components-form-demo-layout">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Form Layout</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageLayout" />
  </div>
</div>
<div className="card" id="components-form-demo-register">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Registration</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageRegister" />
  </div>
</div>
<div className="card" id="components-form-demo-validate-other">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Other Form Controls</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageValidateother" />
  </div>
</div>
<div className="card" id="components-form-demo-without-form-create">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Handle Form Data Manually</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageWithoutformcreate" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-form-demo-coordinated">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Coordinated Controls</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageCoordinated" />
  </div>
</div>
<div className="card" id="components-form-demo-dynamic-form-item">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Dynamic Form Item</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageDynamicformitem" />
  </div>
</div>
<div className="card" id="components-form-demo-form-in-modal">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Form in Modal to Create</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageForminmodal" />
  </div>
</div>
<div className="card" id="components-form-demo-horizontal-login">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Horizontal Login Form</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageHorizontallogin" />
  </div>
</div>
<div className="card" id="components-form-demo-normal-login">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Login Form</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageNormallogin" />
  </div>
</div>
<div className="card" id="components-form-demo-time-related-controls">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong></strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageTimerelatedcontrols" />
  </div>
</div>
<div className="card" id="components-form-demo-validate-static">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Validation</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="FormPageValidatestatic" />
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

export default FormPageItems
