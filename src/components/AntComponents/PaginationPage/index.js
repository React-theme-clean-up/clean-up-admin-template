import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderPaginationPageBasic } from './basic.js';
import { default as renderPaginationPageChanger } from './changer.js';
import { default as renderPaginationPageControlled } from './controlled.js';
import { default as renderPaginationPageItemRender } from './itemRender.js';
import { default as renderPaginationPageJump } from './jump.js';
import { default as renderPaginationPageMini } from './mini.js';
import { default as renderPaginationPageMore } from './more.js';
import { default as renderPaginationPageSimple } from './simple.js';
import { default as renderPaginationPageTotal } from './total.js';


class PaginationPageItems extends React.Component {

  componentDidMount() {
    renderPaginationPageBasic(ReactDOM, document.getElementById("PaginationPageBasic"));
renderPaginationPageChanger(ReactDOM, document.getElementById("PaginationPageChanger"));
renderPaginationPageControlled(ReactDOM, document.getElementById("PaginationPageControlled"));
renderPaginationPageItemRender(ReactDOM, document.getElementById("PaginationPageItemRender"));
renderPaginationPageJump(ReactDOM, document.getElementById("PaginationPageJump"));
renderPaginationPageMini(ReactDOM, document.getElementById("PaginationPageMini"));
renderPaginationPageMore(ReactDOM, document.getElementById("PaginationPageMore"));
renderPaginationPageSimple(ReactDOM, document.getElementById("PaginationPageSimple"));
renderPaginationPageTotal(ReactDOM, document.getElementById("PaginationPageTotal"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Pagination</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-pagination-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageBasic" />
  </div>
</div>
<div className="card" id="components-pagination-demo-controlled">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Controlled</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageControlled" />
  </div>
</div>
<div className="card" id="components-pagination-demo-jump">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Jumper</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageJump" />
  </div>
</div>
<div className="card" id="components-pagination-demo-more">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>More</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageMore" />
  </div>
</div>
<div className="card" id="components-pagination-demo-total">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Total number</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageTotal" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-pagination-demo-changer">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Changer</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageChanger" />
  </div>
</div>
<div className="card" id="components-pagination-demo-itemRender">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Prev and next</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageItemRender" />
  </div>
</div>
<div className="card" id="components-pagination-demo-mini">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Mini size</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageMini" />
  </div>
</div>
<div className="card" id="components-pagination-demo-simple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Simple mode</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="PaginationPageSimple" />
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

export default PaginationPageItems
