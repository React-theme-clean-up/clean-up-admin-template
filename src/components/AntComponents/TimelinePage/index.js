import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTimelinePageBasic } from './basic.js';
import { default as renderTimelinePageColor } from './color.js';
import { default as renderTimelinePageCustom } from './custom.js';
import { default as renderTimelinePagePending } from './pending.js';


class TimelinePageItems extends React.Component {

  componentDidMount() {
    renderTimelinePageBasic(ReactDOM, document.getElementById("TimelinePageBasic"));
renderTimelinePageColor(ReactDOM, document.getElementById("TimelinePageColor"));
renderTimelinePageCustom(ReactDOM, document.getElementById("TimelinePageCustom"));
renderTimelinePagePending(ReactDOM, document.getElementById("TimelinePagePending"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Timeline</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-timeline-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimelinePageBasic" />
  </div>
</div>
<div className="card" id="components-timeline-demo-custom">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Custom</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimelinePageCustom" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-timeline-demo-color">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Color</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimelinePageColor" />
  </div>
</div>
<div className="card" id="components-timeline-demo-pending">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Last node</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TimelinePagePending" />
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

export default TimelinePageItems
