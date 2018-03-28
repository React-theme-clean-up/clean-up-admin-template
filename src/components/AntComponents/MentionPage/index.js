import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderMentionPageAsync } from './async.js'
import { default as renderMentionPageAvatar } from './avatar.js'
import { default as renderMentionPageBasic } from './basic.js'
import { default as renderMentionPageControlldersimple } from './controllder-simple.js'
import { default as renderMentionPageControlled } from './controlled.js'
import { default as renderMentionPageCustomtag } from './custom-tag.js'
import { default as renderMentionPageMultilines } from './multilines.js'
import { default as renderMentionPageMultipletrigger } from './multiple-trigger.js'
import { default as renderMentionPagePlacement } from './placement.js'
import { default as renderMentionPagePopupContainer } from './popupContainer.js'
import { default as renderMentionPageReadonly } from './readonly.js'

class MentionPageItems extends React.Component {
  componentDidMount() {
    renderMentionPageAsync(ReactDOM, document.getElementById('MentionPageAsync'))
    renderMentionPageAvatar(ReactDOM, document.getElementById('MentionPageAvatar'))
    renderMentionPageBasic(ReactDOM, document.getElementById('MentionPageBasic'))
    renderMentionPageControlldersimple(
      ReactDOM,
      document.getElementById('MentionPageControlldersimple'),
    )
    renderMentionPageControlled(ReactDOM, document.getElementById('MentionPageControlled'))
    renderMentionPageCustomtag(ReactDOM, document.getElementById('MentionPageCustomtag'))
    renderMentionPageMultilines(ReactDOM, document.getElementById('MentionPageMultilines'))
    renderMentionPageMultipletrigger(
      ReactDOM,
      document.getElementById('MentionPageMultipletrigger'),
    )
    renderMentionPagePlacement(ReactDOM, document.getElementById('MentionPagePlacement'))
    renderMentionPagePopupContainer(ReactDOM, document.getElementById('MentionPagePopupContainer'))
    renderMentionPageReadonly(ReactDOM, document.getElementById('MentionPageReadonly'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Mention</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-mention-demo-async">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Asynchronous loading</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageAsync" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-controlled">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>With Form</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageControlled" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-multilines">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong />
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageMultilines" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-placement">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Placement</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPagePlacement" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-readonly">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>disabled or readOnly</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageReadonly" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-mention-demo-avatar">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Icon Image</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageAvatar" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-controllder-simple">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Controlled</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageControlldersimple" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-custom-tag">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customize Suggestion</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageCustomtag" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-multiple-trigger">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Customize Trigger Token</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPageMultipletrigger" />
                    </div>
                  </div>
                  <div className="card" id="components-mention-demo-popupContainer">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>SuggestionContainer</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="MentionPagePopupContainer" />
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

export default MentionPageItems
