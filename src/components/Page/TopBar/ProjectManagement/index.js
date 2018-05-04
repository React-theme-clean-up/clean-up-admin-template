import React from 'react'
import { Menu, Dropdown } from 'antd'

class ProjectManagement extends React.Component {
  render() {
    const menu = (
      <Menu selectable={false}>
        <span className="topbar__dropdownTitle">
          <strong>Active</strong>
        </span>
        <Menu.Item>
          <a href={null}>Project Management</a>
        </Menu.Item>
        <Menu.Item>
          <a href={null}>User Interface Development</a>
        </Menu.Item>
        <Menu.Item>
          <a href={null}>Documentation</a>
        </Menu.Item>
        <span className="topbar__dropdownTitle">
          <strong>Inactive</strong>
        </span>
        <Menu.Item>
          <a href={null}>Marketing</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href={null}>
            <i className="topbar__dropdownMenuIcon icmn-cog" /> Settings
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="topbar__dropdown d-inline-block mr-4">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
          <a className="ant-dropdown-link" href="/">
            <i className="icmn-database mr-2 topbar__dropdownIcon" />
            <span className="d-none d-xl-inline">
              <strong>Project Management</strong>
            </span>
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default ProjectManagement
