import React from 'react'
import ReactDOM from 'react-dom'

import { default as renderCalendarPageBasic } from './basic.js'
import { default as renderCalendarPageCard } from './card.js'
import { default as renderCalendarPageNoticecalendar } from './notice-calendar.js'
import { default as renderCalendarPageSelect } from './select.js'

class CalendarPageItems extends React.Component {
  componentDidMount() {
    renderCalendarPageBasic(ReactDOM, document.getElementById('CalendarPageBasic'))
    renderCalendarPageCard(ReactDOM, document.getElementById('CalendarPageCard'))
    renderCalendarPageNoticecalendar(
      ReactDOM,
      document.getElementById('CalendarPageNoticecalendar'),
    )
    renderCalendarPageSelect(ReactDOM, document.getElementById('CalendarPageSelect'))
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 mr-3 d-inline-block text-black">
                <strong>Calendar</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card" id="components-calendar-demo-basic">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Basic</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CalendarPageBasic" />
                    </div>
                  </div>
                  <div className="card" id="components-calendar-demo-notice-calendar">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Notice Calendar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CalendarPageNoticecalendar" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card" id="components-calendar-demo-card">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Card</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CalendarPageCard" />
                    </div>
                  </div>
                  <div className="card" id="components-calendar-demo-select">
                    <div className="card-header">
                      <h5 className="mb-0 mr-3 d-inline-block text-black">
                        <strong>Selectable Calendar</strong>
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="CalendarPageSelect" />
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

export default CalendarPageItems
