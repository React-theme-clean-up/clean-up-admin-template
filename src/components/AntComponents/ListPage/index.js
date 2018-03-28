import React from 'react';
import ReactDOM from 'react-dom';

import { default as renderListPageBasic } from './basic.js';
import { default as renderListPageGrid } from './grid.js';
import { default as renderListPageInfiniteload } from './infinite-load.js';
import { default as renderListPageInfinitevirtualizedload } from './infinite-virtualized-load.js';
import { default as renderListPageLoadmore } from './loadmore.js';
import { default as renderListPageResposive } from './resposive.js';
import { default as renderListPageSimple } from './simple.js';
import { default as renderListPageVertical } from './vertical.js';


class ListPageItems extends React.Component {

  componentDidMount() {
    renderListPageBasic(ReactDOM, document.getElementById("ListPageBasic"));
renderListPageGrid(ReactDOM, document.getElementById("ListPageGrid"));
renderListPageInfiniteload(ReactDOM, document.getElementById("ListPageInfiniteload"));
renderListPageInfinitevirtualizedload(ReactDOM, document.getElementById("ListPageInfinitevirtualizedload"));
renderListPageLoadmore(ReactDOM, document.getElementById("ListPageLoadmore"));
renderListPageResposive(ReactDOM, document.getElementById("ListPageResposive"));
renderListPageSimple(ReactDOM, document.getElementById("ListPageSimple"));
renderListPageVertical(ReactDOM, document.getElementById("ListPageVertical"));

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>List</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-list-demo-basic">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Basic list</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageBasic" />
  </div>
</div>
<div className="card" id="components-list-demo-infinite-load">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Scrolling loaded</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageInfiniteload" />
  </div>
</div>
<div className="card" id="components-list-demo-loadmore">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Load more</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageLoadmore" />
  </div>
</div>
<div className="card" id="components-list-demo-simple">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Simple list</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageSimple" />
  </div>
</div>

                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-list-demo-grid">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Grid</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageGrid" />
  </div>
</div>
<div className="card" id="components-list-demo-infinite-virtualized-load">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Infinite</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageInfinitevirtualizedload" />
  </div>
</div>
<div className="card" id="components-list-demo-resposive">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Responsive grid list</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageResposive" />
  </div>
</div>
<div className="card" id="components-list-demo-vertical">
  <div className="card-header">
    <h5 className="mb-0 mr-3 d-inline-block text-black">
      <strong>Vertical</strong>
    </h5>
  </div>
  <div className="card-body">
    <div id="ListPageVertical" />
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

export default ListPageItems
