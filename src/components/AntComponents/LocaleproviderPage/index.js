import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderLocaleproviderPageAll } from './all.js';
import { default as renderLocaleproviderPageBasic } from './basic.js';


class LocaleproviderPageItems extends React.Component {

  componentDidMount() {
    renderLocaleproviderPageAll(ReactDOM, document.getElementById("LocaleproviderPageAll"));
renderLocaleproviderPageBasic(ReactDOM, document.getElementById("LocaleproviderPageBasic"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>LocaleProvider</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-locale-provider-demo-all">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>All components</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LocaleproviderPageAll" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-locale-provider-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Localization</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="LocaleproviderPageBasic" />
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

export default LocaleproviderPageItems
