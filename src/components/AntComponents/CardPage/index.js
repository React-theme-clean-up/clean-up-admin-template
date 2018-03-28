import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderCardPageBasic } from './basic.js';
import { default as renderCardPageBorderless } from './border-less.js';
import { default as renderCardPageFlexiblecontent } from './flexible-content.js';
import { default as renderCardPageGridcard } from './grid-card.js';
import { default as renderCardPageIncolumn } from './in-column.js';
import { default as renderCardPageInner } from './inner.js';
import { default as renderCardPageLoading } from './loading.js';
import { default as renderCardPageMeta } from './meta.js';
import { default as renderCardPageSimple } from './simple.js';
import { default as renderCardPageTabs } from './tabs.js';


class CardPageItems extends React.Component {

  componentDidMount() {
    renderCardPageBasic(ReactDOM, document.getElementById("CardPageBasic"));
renderCardPageBorderless(ReactDOM, document.getElementById("CardPageBorderless"));
renderCardPageFlexiblecontent(ReactDOM, document.getElementById("CardPageFlexiblecontent"));
renderCardPageGridcard(ReactDOM, document.getElementById("CardPageGridcard"));
renderCardPageIncolumn(ReactDOM, document.getElementById("CardPageIncolumn"));
renderCardPageInner(ReactDOM, document.getElementById("CardPageInner"));
renderCardPageLoading(ReactDOM, document.getElementById("CardPageLoading"));
renderCardPageMeta(ReactDOM, document.getElementById("CardPageMeta"));
renderCardPageSimple(ReactDOM, document.getElementById("CardPageSimple"));
renderCardPageTabs(ReactDOM, document.getElementById("CardPageTabs"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Card</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-card-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic card</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageBasic" />
  </div>
</div>
<div className="card" id="components-card-demo-flexible-content">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Customized content</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageFlexiblecontent" />
  </div>
</div>
<div className="card" id="components-card-demo-in-column">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Card in column</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageIncolumn" />
  </div>
</div>
<div className="card" id="components-card-demo-loading">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Loading card</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageLoading" />
  </div>
</div>
<div className="card" id="components-card-demo-simple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Simple card</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageSimple" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-card-demo-border-less">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>No border</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageBorderless" />
  </div>
</div>
<div className="card" id="components-card-demo-grid-card">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Grid card</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageGridcard" />
  </div>
</div>
<div className="card" id="components-card-demo-inner">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Inner card</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageInner" />
  </div>
</div>
<div className="card" id="components-card-demo-meta">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Support more content configuration</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageMeta" />
  </div>
</div>
<div className="card" id="components-card-demo-tabs">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>With tabs</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="CardPageTabs" />
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

export default CardPageItems
