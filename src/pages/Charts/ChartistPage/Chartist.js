// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import ChartistGraph from 'react-chartist'

class ChartistsItems extends React.Component {
  state = {}

  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]],
    }

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null
        },
      },
    }

    var type = 'Bar'
    return (
      <section className="card">
        <div className="card-header">
          <span className="cat__core__title">
            <strong>Chartist.js</strong>
            <a
              href="https://gionkunz.github.io/chartist-js/"
              target="_blank"
              class="btn btn-sm btn-primary ml-2"
            >
              Official Documentation <i class="icmn-link ml-1" />
            </a>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6" />
          </div>
        </div>
      </section>
    )
  }
}

export default ChartistsItems
