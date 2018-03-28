import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderModalPageAsync } from './async.js';
import { default as renderModalPageBasic } from './basic.js';
import { default as renderModalPageConfirmpromise } from './confirm-promise.js';
import { default as renderModalPageConfirm } from './confirm.js';
import { default as renderModalPageFooter } from './footer.js';
import { default as renderModalPageInfo } from './info.js';
import { default as renderModalPageLocale } from './locale.js';
import { default as renderModalPageManual } from './manual.js';
import { default as renderModalPagePosition } from './position.js';


class ModalPageItems extends React.Component {

  componentDidMount() {
    renderModalPageAsync(ReactDOM, document.getElementById("ModalPageAsync"));
renderModalPageBasic(ReactDOM, document.getElementById("ModalPageBasic"));
renderModalPageConfirmpromise(ReactDOM, document.getElementById("ModalPageConfirmpromise"));
renderModalPageConfirm(ReactDOM, document.getElementById("ModalPageConfirm"));
renderModalPageFooter(ReactDOM, document.getElementById("ModalPageFooter"));
renderModalPageInfo(ReactDOM, document.getElementById("ModalPageInfo"));
renderModalPageLocale(ReactDOM, document.getElementById("ModalPageLocale"));
renderModalPageManual(ReactDOM, document.getElementById("ModalPageManual"));
renderModalPagePosition(ReactDOM, document.getElementById("ModalPagePosition"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Modal</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-modal-demo-async">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Asynchronously close</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageAsync" />
  </div>
</div>
<div className="card" id="components-modal-demo-confirm-promise">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Confirmation modal dialog</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageConfirmpromise" />
  </div>
</div>
<div className="card" id="components-modal-demo-footer">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Footer</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageFooter" />
  </div>
</div>
<div className="card" id="components-modal-demo-locale">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Internationalization</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageLocale" />
  </div>
</div>
<div className="card" id="components-modal-demo-position">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>To customize the position of modal</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPagePosition" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-modal-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageBasic" />
  </div>
</div>
<div className="card" id="components-modal-demo-confirm">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Confirmation modal dialog</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageConfirm" />
  </div>
</div>
<div className="card" id="components-modal-demo-info">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Information modal dialog</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageInfo" />
  </div>
</div>
<div className="card" id="components-modal-demo-manual">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Manual to destroy</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ModalPageManual" />
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

export default ModalPageItems
