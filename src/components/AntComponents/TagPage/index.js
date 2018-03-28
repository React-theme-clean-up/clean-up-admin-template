import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderTagPageBasic } from './basic.js';
import { default as renderTagPageCheckable } from './checkable.js';
import { default as renderTagPageColorful } from './colorful.js';
import { default as renderTagPageControl } from './control.js';
import { default as renderTagPageHottags } from './hot-tags.js';


class TagPageItems extends React.Component {

  componentDidMount() {
    renderTagPageBasic(ReactDOM, document.getElementById("TagPageBasic"));
renderTagPageCheckable(ReactDOM, document.getElementById("TagPageCheckable"));
renderTagPageColorful(ReactDOM, document.getElementById("TagPageColorful"));
renderTagPageControl(ReactDOM, document.getElementById("TagPageControl"));
renderTagPageHottags(ReactDOM, document.getElementById("TagPageHottags"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Tag</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-tag-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TagPageBasic" />
  </div>
</div>
<div className="card" id="components-tag-demo-colorful">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Colorful Tag</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TagPageColorful" />
  </div>
</div>
<div className="card" id="components-tag-demo-hot-tags">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Hot Tags</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TagPageHottags" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-tag-demo-checkable">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Checkable</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TagPageCheckable" />
  </div>
</div>
<div className="card" id="components-tag-demo-control">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Add</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="TagPageControl" />
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

export default TagPageItems
