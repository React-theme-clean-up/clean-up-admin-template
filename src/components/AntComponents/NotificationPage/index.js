import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderNotificationPageBasic } from './basic.js';
import { default as renderNotificationPageCustomicon } from './custom-icon.js';
import { default as renderNotificationPageCustomstyle } from './custom-style.js';
import { default as renderNotificationPageDuration } from './duration.js';
import { default as renderNotificationPagePlacement } from './placement.js';
import { default as renderNotificationPageWithbtn } from './with-btn.js';
import { default as renderNotificationPageWithicon } from './with-icon.js';


class NotificationPageItems extends React.Component {

  componentDidMount() {
    renderNotificationPageBasic(ReactDOM, document.getElementById("NotificationPageBasic"));
renderNotificationPageCustomicon(ReactDOM, document.getElementById("NotificationPageCustomicon"));
renderNotificationPageCustomstyle(ReactDOM, document.getElementById("NotificationPageCustomstyle"));
renderNotificationPageDuration(ReactDOM, document.getElementById("NotificationPageDuration"));
renderNotificationPagePlacement(ReactDOM, document.getElementById("NotificationPagePlacement"));
renderNotificationPageWithbtn(ReactDOM, document.getElementById("NotificationPageWithbtn"));
renderNotificationPageWithicon(ReactDOM, document.getElementById("NotificationPageWithicon"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Notification</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-notification-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageBasic" />
  </div>
</div>
<div className="card" id="components-notification-demo-custom-style">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized style</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageCustomstyle" />
  </div>
</div>
<div className="card" id="components-notification-demo-placement">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Placement</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPagePlacement" />
  </div>
</div>
<div className="card" id="components-notification-demo-with-icon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Notification with icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageWithicon" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-notification-demo-custom-icon">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized Icon</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageCustomicon" />
  </div>
</div>
<div className="card" id="components-notification-demo-duration">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Duration after which the notification box is closed</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageDuration" />
  </div>
</div>
<div className="card" id="components-notification-demo-with-btn">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Custom close button</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="NotificationPageWithbtn" />
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

export default NotificationPageItems
