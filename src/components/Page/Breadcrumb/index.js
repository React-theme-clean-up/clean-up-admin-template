// @flow
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { menuData } from '../Menu'
import { reduce } from 'lodash'
import './style.css'

class BreadcrumbBar extends React.Component {
  state = {
    breadcrumb: [],
  }

  getPath(data, url, parents = []) {
    let items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        } else if (entry.url === url) {
          return [entry].concat(parents)
        } else if (entry.children) {
          let nested = this.getPath(entry.children, url, [entry].concat(parents))
          return nested ? nested : result
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : false
  }

  getBreadcrumb = (props, items) => {
    let { breadcrumb } = this.state
    let url = props.location.pathname
    let [activeMenuItem, ...path] = this.getPath(items, url)
    if (activeMenuItem && path.length) {
      breadcrumb = path.reverse().map((item, index) => {
        if (index === path.length - 1) {
          return (
            <span key={item.key}>
              <span className="utils__arrow text-muted"> ▸</span>
              <span className="text-muted">
                {item.title}
              </span>
              <span className="utils__arrow"> ▸</span>
              <strong>
                {activeMenuItem.title}
              </strong>
            </span>
          )
        } else {
          return (
            <span key={item.key}>
              <span className="utils__arrow text-muted"> ▸</span>
              <span className="text-muted">
                {item.title}
              </span>
            </span>
          )
        }
      })
    } else {
      breadcrumb = (
        <span>
          <span className="utils__arrow"> ▸</span>
          <strong>
            {props.name}
          </strong>
        </span>
      )
    }
    return breadcrumb
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      breadcrumb: this.getBreadcrumb(newProps, menuData),
    })
  }

  componentDidMount() {
    this.setState({
      breadcrumb: this.getBreadcrumb(this.props, menuData),
    })
  }

  render() {
    let { breadcrumb } = this.state
    return (
      <div className="breadcrumbBar">
        <div className="breadcrumbBar__path mb-2">
          <Link to={`/dashboard/alpha`} className="text-muted">
            Home
          </Link>
          {breadcrumb}
        </div>
      </div>
    )
  }
}
const Breadcrumb = withRouter(BreadcrumbBar)

export default Breadcrumb
