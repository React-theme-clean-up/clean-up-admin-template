import React from 'react'
import { Tooltip } from 'antd'

import data from './data.json'

class LinearIcons extends React.Component {
  state = {
    iconsData: [],
  }

  componentWillMount() {
    this.setState({
      iconsData: data.iconsData,
    })
  }
  render() {
    let { iconsData } = this.state

    return (
      <div>
        <section className="card">
          <div className="card-header">
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>Icomoon Free</strong>
              <a
                href="https://icomoon.io/#icons-icomoon"
                target="_blank"
                className="btn btn-sm btn-primary ml-2"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <ul className="utils__iconsBlock list-unstyled">
                  {iconsData.map((icon, index) =>
                    <Tooltip title={icon} key={index}>
                      <li>
                        <i className={icon} />
                      </li>
                    </Tooltip>,
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LinearIcons
