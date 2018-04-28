import React from 'react'
import { Line, Bar } from 'react-peity';

class PietyItems extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header">
        <span className="cat__core__title">
            <strong>Peity</strong>
            <a href="http://benpickles.github.io/peity/" target="_blank" className="btn btn-sm btn-primary ml-2">Official Documentation <i className="icmn-link ml-1"></i></a>
        </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="text-black"><strong>Blue Color</strong></h4>
              <p className="text-muted">Element: read <a href="http://benpickles.github.io/peity/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <table className="table table-hover table-vertical-middle">
                  <tr>
                    <td>Line Charts</td>
                    <td>
                      <Line values={ [5,3,9,6,5,9,7,3,5,2] }/>
                      <Line values={ [5,3,2,-1,-3,-2,2,3,5,2] }/>
                      <Line values={ [0,-3,-6,-4,-5,-4,-7,-3,-5,-2] }/>
                    </td>
                  </tr>
                  <tr>
                    <td>Bar Charts</td>
                    <td>
                      <Bar values={ [5,3,9,6,5,9,7,3,5,2] }/>
                      <Bar values={ [5,3,2,-1,-3,-2,2,3,5,2] }/>
                      <Bar values={ [0,-3,-6,-4,-5,-4,-7,-3,-5,-2] }/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-black"><strong>Green Color</strong></h4>
              <p className="text-muted">Element: read <a href="http://benpickles.github.io/peity/" target="_blank">official documentation<small><i className="icmn-link ml-1"></i></small></a></p>
              <div className="mb-5">
                <table className="table table-hover table-vertical-middle">
                  <tr>
                    <td>Line Charts</td>
                    <td>
                      <Line fill="green" stroke="green"  values={ [5,3,9,6,5,9,7,3,5,2] }/>
                      <Line fill="green" stroke="green"  values={ [5,3,2,-1,-3,-2,2,3,5,2] }/>
                      <Line fill="green" stroke="green"  values={ [0,-3,-6,-4,-5,-4,-7,-3,-5,-2] }/>
                    </td>
                  </tr>
                  <tr>
                    <td>Bar Charts</td>
                    <td>
                      <Bar fill={["green"]} values={ [5,3,9,6,5,9,7,3,5,2] }/>
                      <Bar fill={["green"]} values={ [5,3,2,-1,-3,-2,2,3,5,2] }/>
                      <Bar fill={["green"]} values={ [0,-3,-6,-4,-5,-4,-7,-3,-5,-2] }/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PietyItems
