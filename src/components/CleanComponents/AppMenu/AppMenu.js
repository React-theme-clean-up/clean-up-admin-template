// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Switch, Layout } from 'antd'
import './AppMenu.css'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class AppMenu extends React.Component {
  state = {
    theme: 'dark',
    collapsed: false,
    current: '1',
  }
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }
  changeCollapsed = value => {
    this.setState({
      collapsed: !!value,
    })
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <Sider
        width={256}
        collapsed={this.state.collapsed}
      >
        <div className="appMenu__logo">

        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          //style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="122">
            <Icon type="user" />
            <span>Option 1</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <div style={{ height: 100, padding: 10, lineHeight: '20px', whiteSpace: 'normal', width: 150 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigtion Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>

        <br />
        <br />

        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />

        <br />
        <br />

        <Switch
          checked={this.state.collapsed}
          onChange={this.changeCollapsed}
          checkedChildren="Collapsed"
          unCheckedChildren="Uncollapsed"
        />
      </Sider>
    )
  }
}

export default AppMenu
