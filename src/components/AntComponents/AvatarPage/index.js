import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderAvatarPageBadge } from './badge.js';
import { default as renderAvatarPageBasic } from './basic.js';
import { default as renderAvatarPageDynamic } from './dynamic.js';
import { default as renderAvatarPageType } from './type.js';


class AvatarPageItems extends React.Component {

  componentDidMount() {
    renderAvatarPageBadge(ReactDOM, document.getElementById("AvatarPageBadge"));
renderAvatarPageBasic(ReactDOM, document.getElementById("AvatarPageBasic"));
renderAvatarPageDynamic(ReactDOM, document.getElementById("AvatarPageDynamic"));
renderAvatarPageType(ReactDOM, document.getElementById("AvatarPageType"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Avatar</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-avatar-demo-badge">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>With Badge</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AvatarPageBadge" />
  </div>
</div>
<div className="card" id="components-avatar-demo-dynamic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Autoset Font Size</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AvatarPageDynamic" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-avatar-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AvatarPageBasic" />
  </div>
</div>
<div className="card" id="components-avatar-demo-type">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Type</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="AvatarPageType" />
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

export default AvatarPageItems
