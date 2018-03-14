// @flow
import React from 'react'
import { connect } from 'react-redux'
import { toggleMenuLeft } from 'ducks/app'
import { Link, NavLink } from 'react-router-dom'
import { ConnectedRoute } from 'reactRouterConnected'
import cx from 'classnames'

@connect()
class MenuLink extends React.Component {
  static defaultProps = {
    exact: true,
  }

  render() {
    const { to, exact, children } = this.props
    return (
      <ConnectedRoute
        path={to}
        exact={exact}
        children={({ match }) =>
          <li
            className={cx('cat__menu-left__item cat__menu-left--colorful--yellow', {
              'cat__menu-left__item--active': match,
            })}
          >
            <Link to={to} onClick={this.handleClick}>
              {children}
            </Link>
          </li>}
      />
    )
  }
}

const mapStateToProps = (state, props) => ({})

@connect(mapStateToProps)
class MenuLeft extends React.Component {
  // $FlowFixMe
  handleMenuLeftToggle = event => {
    event.preventDefault()
    this.props.dispatch(toggleMenuLeft())
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
            <NavLink to="/">
              <strong>Clan ui logo</strong>
            </NavLink>
          </div>
          <div className="cat__menu-left__inner">
            <div>
              <ul className="cat__menu-left__list cat__menu-left__list--root">
                <MenuLink exact={false} to="/dashboard">
                  <div>
                    <span className="cat__menu-left__icon icmn-home" />
                    Dashboard
                  </div>
                </MenuLink>
              </ul>
            </div>
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
