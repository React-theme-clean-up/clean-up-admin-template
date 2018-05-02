import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'
import './style.css'

const animationData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  series: [
    [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
    [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
    [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8]
  ]
}

const animatonOptions = {
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 !== 0 ? !1 : value
    }
  }
}

const smilData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
  ]
}

let smilOptions = {
  low: 0,
  plugins: [
    Chartist.plugins.tooltip()
  ],
  seq: 0,
}

let smilListener = {
  created: function () {
    smilOptions.seq = 0
  },
  draw: function(data) {
    let delays = 80
    let durations = 500
    
    if (smilOptions.seq++, "line" === data.type) data.element.animate({
      opacity: {
        begin: smilOptions.seq * delays + 1e3,
        dur: durations,
        from: 0,
        to: 1
      }
    });
    else if ("label" === data.type && "x" === data.axis) data.element.animate({
      y: {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        easing: "easeOutQuart"
      }
    });
    else if ("label" === data.type && "y" === data.axis) data.element.animate({
      x: {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: "easeOutQuart"
      }
    });
    else if ("point" === data.type) data.element.animate({
      x1: {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: "easeOutQuart"
      },
      x2: {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: "easeOutQuart"
      },
      opacity: {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: "easeOutQuart"
      }
    });
    else if ("grid" === data.type) {
      var pos1Animation = {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "1"] - 30,
          to: data[data.axis.units.pos + "1"],
          easing: "easeOutQuart"
        },
        pos2Animation = {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + "2"] - 100,
          to: data[data.axis.units.pos + "2"],
          easing: "easeOutQuart"
        },
        ctAnimations = {};
      ctAnimations[data.axis.units.pos + "1"] = pos1Animation, ctAnimations[data.axis.units.pos + "2"] = pos2Animation, ctAnimations.opacity = {
        begin: smilOptions.seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: "easeOutQuart"
      }, data.element.animate(ctAnimations)
    }
  },
}

let lineData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}

let lineOptions = {
  fullWidth: !0,
  chartPadding: {
    right: 40
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
}

let areaData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5, 4]
  ]
}

let areaOptions = {
  low: 0,
  showArea: true,
  plugins: [
    Chartist.plugins.tooltip()
  ]
}

let scatterTimes = function(n) {
    return Array.apply(null, new Array(n))
  },
  scatterData = scatterTimes(52).map(Math.random).reduce(function(data, rnd, index) {
    return data.labels.push(index + 1), data.series.forEach(function(series) {
      series.push(100 * Math.random())
    }), data
  }, {
    labels: [],
    series: scatterTimes(4).map(function() {
      return []
    })
  }),
  scatterOptions = {
    showLine: !1,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 13 === 0 ? "W" + value : null
      }
    },
    plugins: [
      Chartist.plugins.tooltip()
    ]
  },
  scatterResponsiveOptions = [
    ["screen and (min-width: 640px)", {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 4 === 0 ? "W" + value : null
        }
      }
    }]
  ];

class ChartistsItems extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
        <span className="cat__core__title">
            <strong>Chartist.js</strong>
            <a href="https://gionkunz.github.io/chartist-js/" target="_blank" className="btn btn-sm btn-primary ml-2">Official Documentation <i className="icmn-link ml-1"></i></a>
        </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>CSS Styling & Animations</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300 chart-css-animations chartist-theme-dark chartist-animated" data={animationData} options={animatonOptions} type="Line"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>SMIL Animations</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300 chart-smil-animations" data={smilData} options={smilOptions} type="Line" listener={smilListener}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Line</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300" data={lineData} options={lineOptions} type="Line"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Area</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300" data={areaData} options={areaOptions} type="Line"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Scatter</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300" data={scatterData} options={scatterOptions} responsive-options={scatterResponsiveOptions}/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Horizontal Bar</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Bi-polar Line</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Bi-polar Bar</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Stacked Bar</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Overlapping Bar</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Simple Pie</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-black"><strong>Pie w/ Labels</strong></h5>
              <p className="text-muted">Element: read <a href="https://gionkunz.github.io/chartist-js/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <ChartistGraph className="height-300"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ChartistsItems
