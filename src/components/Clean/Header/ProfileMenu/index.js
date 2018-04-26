
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from 'ducks/app'
import { Menu, Dropdown } from 'antd'

const mapDispatchToProps = dispatch => ({
  logout: event => {
    event.preventDefault()
    dispatch(logout())
  },
})

const mapStateToProps = (state, props) => ({
  userState: state.app.userState,
})

@connect(mapStateToProps, mapDispatchToProps)
class ProfileMenu extends React.Component {
  render() {
    // $FlowFixMe
    const { userState, logout } = this.props
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <div className="rfq__widget__system-status__item">
            <strong>
              Hello, {userState.firstName} {userState.lastName}
            </strong>
            {userState.role === 'agent' &&
              <div>
                <strong>Billing Plan:</strong> {userState.plan && userState.plan.name}
                <br />
                <strong>Status:</strong>
                <span className="badge badge-primary font-size-14 ml-1">{userState.status}</span>
              </div>}
            {userState.role === 'administrator' &&
              <div>
                <strong>Role:</strong> Administrator
              </div>}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <div className="rfq__widget__system-status__item">
            <strong>Email:</strong> {userState.email}
            <br />
            <strong>Phone:</strong> {userState.phone ? userState.phone : '—'}
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/profile">
            <i className="dropdown-icon icmn-user" /> Edit Profile
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="/" onClick={logout}>
            <i className="dropdown-icon icmn-exit" /> Logout
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="cat__top-bar__avatar-dropdown">
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <a className="ant-dropdown-link" href="/">
            <span className="cat__top-bar__avatar cat__core__avatar--border">
              <img src="/resources/images/avatars/temp.jpg" alt="" />
            </span>
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileMenu
