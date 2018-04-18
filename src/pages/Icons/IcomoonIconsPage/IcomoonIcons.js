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
            <span className="cat__core__title">
              <strong>Icomoon Free</strong>
              <a
                href="https://icomoon.io/#icons-icomoon"
                target="_blank"
                className="btn btn-sm btn-primary ml-2"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <ul className="cat__core__icons-block list-unstyled">
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
