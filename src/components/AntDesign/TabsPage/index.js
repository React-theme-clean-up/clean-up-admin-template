import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderTabsPageBasic } from './basic.js'
import { default as renderTabsPageCardtop } from './card-top.js'
import { default as renderTabsPageCard } from './card.js'
import { default as renderTabsPageCustomaddtrigger } from './custom-add-trigger.js'
import { default as renderTabsPageDisabled } from './disabled.js'
import { default as renderTabsPageEditablecard } from './editable-card.js'
import { default as renderTabsPageExtra } from './extra.js'
import { default as renderTabsPageIcon } from './icon.js'
import { default as renderTabsPagePosition } from './position.js'
import { default as renderTabsPageSize } from './size.js'
import { default as renderTabsPageSlide } from './slide.js'

class TabsPageItems extends React.Component {
  componentDidMount() {
    renderTabsPageBasic(ReactDOM, document.getElementById('TabsPageBasic'))
    renderTabsPageCardtop(ReactDOM, document.getElementById('TabsPageCardtop'))
    renderTabsPageCard(ReactDOM, document.getElementById('TabsPageCard'))
    renderTabsPageCustomaddtrigger(ReactDOM, document.getElementById('TabsPageCustomaddtrigger'))
    renderTabsPageDisabled(ReactDOM, document.getElementById('TabsPageDisabled'))
    renderTabsPageEditablecard(ReactDOM, document.getElementById('TabsPageEditablecard'))
    renderTabsPageExtra(ReactDOM, document.getElementById('TabsPageExtra'))
    renderTabsPageIcon(ReactDOM, document.getElementById('TabsPageIcon'))
    renderTabsPagePosition(ReactDOM, document.getElementById('TabsPagePosition'))
    renderTabsPageSize(ReactDOM, document.getElementById('TabsPageSize'))
    renderTabsPageSlide(ReactDOM, document.getElementById('TabsPageSlide'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Tabs</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-tabs-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-card">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Card type tab</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageCard" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-disabled">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Disabled</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageDisabled" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-extra">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Extra content</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageExtra" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-position">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Position</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPagePosition" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-slide">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Slide</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageSlide" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-tabs-demo-card-top">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Container of card type Tab</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageCardtop" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-custom-add-trigger">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customized trigger of new tab</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageCustomaddtrigger" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-editable-card">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Add</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageEditablecard" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-icon">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Icon</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageIcon" />
                    </div>
                  </div>
                  <div className="card" id="components-tabs-demo-size">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Size</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="TabsPageSize" />
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

export default TabsPageItems
