// @flow
import React from 'react'
import {connect} from 'react-redux'
import {toggleMenuLeft} from 'ducks/app'
import {Link, NavLink} from 'react-router-dom'
import {ConnectedRoute} from 'reactRouterConnected'
import cx from 'classnames'

@connect()
class MenuLink extends React.Component {
  static defaultProps = {
    exact: true,
  }

  render() {
    const {to, exact, children} = this.props
    return (
      <ConnectedRoute
        path={to}
        exact={exact}
        children={({match}) =>
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

const SubMenuLink = ({to, children}) =>
  <ConnectedRoute
    path={to}
    exact
    children={({match}) =>
      <li
        className={cx('cat__menu-left__item', {
          'cat__menu-left__item--active': match,
        })}
      >
        <Link to={to}>
          {children}
        </Link>
      </li>}
  />

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

  render() {
    return (
      <div>
        <nav className="cat__menu-left">
          <div
            className="cat__menu-left__lock cat__menu-left__action--menu-toggle"
            onClick={this.handleMenuLeftToggle}
          >
            <div className="cat__menu-left__pin-button">
              <div/>
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
                    <span className="cat__menu-left__icon icmn-home"/>
                    Dashboard
                  </div>
                </MenuLink>
                <li className="cat__menu-left__divider">
                  {/* */}
                </li>
                <li className={cx(
                  'cat__menu-left__item cat__menu-left__submenu cat__menu-left--colorful--primary',
                  {
                    // 'cat__menu-left__submenu--toggled': isMenuReports,
                  },
                )}>
                  <a href="/" onClick={this.handleMenuToggle}>
                    <span className="cat__menu-left__icon icmn-file-text"/>
                    Reports
                  </a>
                  <ul
                    className="cat__menu-left__list"
                    style={{
                      // display: isMenuReports ? 'block' : 'none',
                    }}
                  >
                    <SubMenuLink to="/reports/pricing-report">
                      <div>
                        <span className="cat__menu-left__icon">PR</span>
                        Pricing Report
                      </div>
                    </SubMenuLink>
                    <SubMenuLink to="/reports/out-of-stock">
                      <div>
                        <span className="cat__menu-left__icon">OS</span>
                        Out of Stock
                      </div>
                    </SubMenuLink>
                  </ul>
                </li>
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
