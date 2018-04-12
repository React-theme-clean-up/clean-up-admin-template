// @flow
import React from 'react'
import { connect } from 'react-redux'
import { toggleMenuLeft } from 'ducks/app'

import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class MenuLeft extends React.Component {
  // $FlowFixMe
  handleMenuLeftToggle = event => {
    event.preventDefault()
    this.props.dispatch(toggleMenuLeft())
  }

  handleMenuToggle = event => {
    event.preventDefault()
    // this.props.dispatch(toggleMenuReports())
  }

  state = {
    theme: 'dark',
    current: '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <nav className="cat__menu-left">
          <div
            className="cat__menu-left__lock cat__menu-left__action--menu-toggle"
            onClick={this.handleMenuLeftToggle}
          >
            <div className="cat__menu-left__pin-button">
              <div />
            </div>
          </div>
          <div className="cat__menu-left__logo">
            <a to="/">
              <strong>Clan ui logo</strong>
            </a>
          </div>
          <div>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </nav>
        <div
          className="cat__menu-left__backdrop cat__menu-left__action--backdrop-toggle"
          onClick={this.handleMenuLeftToggle}
        />
      </div>
    )
  }
}

export default MenuLeft
