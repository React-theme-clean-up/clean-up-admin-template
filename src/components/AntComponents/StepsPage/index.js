import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderStepsPageCustomizedprogressdot } from './customized-progress-dot.js';
import { default as renderStepsPageError } from './error.js';
import { default as renderStepsPageIcon } from './icon.js';
import { default as renderStepsPageProgressdot } from './progress-dot.js';
import { default as renderStepsPageSimple } from './simple.js';
import { default as renderStepsPageSmallsize } from './small-size.js';
import { default as renderStepsPageStepnext } from './step-next.js';
import { default as renderStepsPageVerticalsmall } from './vertical-small.js';
import { default as renderStepsPageVertical } from './vertical.js';


class StepsPageItems extends React.Component {

  componentDidMount() {
    renderStepsPageCustomizedprogressdot(ReactDOM, document.getElementById("StepsPageCustomizedprogressdot"));
renderStepsPageError(ReactDOM, document.getElementById("StepsPageError"));
renderStepsPageIcon(ReactDOM, document.getElementById("StepsPageIcon"));
renderStepsPageProgressdot(ReactDOM, document.getElementById("StepsPageProgressdot"));
renderStepsPageSimple(ReactDOM, document.getElementById("StepsPageSimple"));
renderStepsPageSmallsize(ReactDOM, document.getElementById("StepsPageSmallsize"));
renderStepsPageStepnext(ReactDOM, document.getElementById("StepsPageStepnext"));
renderStepsPageVerticalsmall(ReactDOM, document.getElementById("StepsPageVerticalsmall"));
renderStepsPageVertical(ReactDOM, document.getElementById("StepsPageVertical"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Steps</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-steps-demo-customized-progress-dot">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Dot Style</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageCustomizedprogressdot" />
  </div>
</div>
<div className="card" id="components-steps-demo-icon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>With icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageIcon" />
  </div>
</div>
<div className="card" id="components-steps-demo-simple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageSimple" />
  </div>
</div>
<div className="card" id="components-steps-demo-step-next">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Switch Step</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageStepnext" />
  </div>
</div>
<div className="card" id="components-steps-demo-vertical">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageVertical" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-steps-demo-error">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Error status</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageError" />
  </div>
</div>
<div className="card" id="components-steps-demo-progress-dot">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Dot Style</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageProgressdot" />
  </div>
</div>
<div className="card" id="components-steps-demo-small-size">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Mini version</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageSmallsize" />
  </div>
</div>
<div className="card" id="components-steps-demo-vertical-small">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical mini version</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="StepsPageVerticalsmall" />
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

export default StepsPageItems
