import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)">Project Management</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">User Inetrface Development</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">Documentation</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">Marketing</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">
        <i className="dropdown-icon icmn-cog" /> Settings
      </a>
    </Menu.Item>
  </Menu>
)

class GridCard extends React.Component {
  render() {
    return (
      <div>
        <section className="card">
          <div className="card-header">
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>Cards</strong>
              <a
                href="http://v4-alpha.getbootstrap.com/components/card/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-sm btn-primary ml-2"
              >
                Official Documentation <i className="icmn-link ml-1" />
              </a>
            </h5>
          </div>
          <div className="card-body">
            <span>Default Card Body</span>
          </div>
          <div className="card-footer">
            <span>Default Card Footer</span>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <div className="pull-right mt-2">
              <span className="mr-3">
                User: <a href="javascript: void(0);">Administrator</a>
              </span>
              <div className="d-inline-block">
                <Dropdown overlay={dropdownMenu}>
                  <a href="javascript: void(0);">
                    <i className="icmn-database mr-2" />
                    <span className="hidden-lg-down mr-2">Dashboards</span>
                    <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </div>
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>Default Card Heading w/ Controls</strong>
            </h5>
          </div>
          <div className="card-body">
            <span>Default Card Body</span>
          </div>
          <div className="card-footer">
            <span>Default Card Footer</span>
          </div>
        </section>
        <section className="row">
          <div className="col-lg-4">
            <section className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Card in Grid</strong>
                </h5>
              </div>
              <div className="card-body">
                <span>
                  Grid: <code>.col-lg-4</code>
                </span>
              </div>
              <div className="card-footer">
                <span>Default Card footer</span>
              </div>
            </section>
          </div>
          <div className="col-lg-8">
            <section className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Card in Grid</strong>
                </h5>
              </div>
              <div className="card-body">
                <span>
                  Grid: <code>.col-lg-8</code>
                </span>
              </div>
              <div className="card-footer">
                <span>Default Card footer</span>
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <div className="card-header">
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>Nested Cards</strong>
            </h5>
          </div>
          <div className="card-body">
            <section className="card">
              <div className="card-header">
                <h5 className="mb-0 mr-3 d-inline-block text-black">
                  <strong>Nested Card Heading: Level 1</strong>
                </h5>
              </div>
              <div className="card-body">
                <section className="card">
                  <div className="card-header">
                    <h5 className="mb-0 mr-3 d-inline-block text-black">
                      <strong>Nested Card Heading: Level 2</strong>
                    </h5>
                  </div>
                  <div className="card-body">
                    <span>Nested Card body: Level 2</span>
                  </div>
                  <div className="card-footer">
                    <span>Nested Card footer: Level 2</span>
                  </div>
                </section>
                <section className="card">
                  <div className="card-header">
                    <h5 className="mb-0 mr-3 d-inline-block text-black">
                      <strong>Nested Card Heading: Level 2</strong>
                    </h5>
                  </div>
                  <div className="card-body">
                    <span>Nested Card body: Level 2</span>
                  </div>
                  <div className="card-footer">
                    <span>Nested Card footer: Level 2</span>
                  </div>
                </section>
              </div>
              <div className="card-footer">
                <span>Nested Card footer: Level 1</span>
              </div>
            </section>
          </div>
          <div className="card-footer">
            <span>Nested Cards footer</span>
          </div>
        </section>
      </div>
    )
  }
}

export default GridCard
