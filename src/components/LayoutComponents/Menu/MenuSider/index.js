import React from 'react'
import { connect } from 'react-redux'
import { Menu, Switch, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { reduce } from 'lodash'
import { setLayoutState } from 'ducks/app'
import 'rc-drawer-menu/assets/index.css'
import './style.scss'

const { Sider } = Layout
const SubMenu = Menu.SubMenu
const Divider = Menu.Divider
const menuData = [
  {
    title: 'Documentation',
    key: 'documentation',
    url: '/documentation',
    icon: 'icmn icmn-books',
  },
  {
    divider: true,
  },
  {
    title: 'Dashboard Alpha',
    key: 'dashboardAlpha',
    url: '/dashboard/alpha',
    icon: 'icomn icmn-home',
  },
  {
    title: 'Ant Components',
    key: 'antComponents',
    icon: 'anticon anticon-ant-design',
    children: [
      {
        title: 'General',
        key: 'general',
        children: [
          {
            key: 'button',
            title: 'Button',
            url: '/antdesign/button',
          },
          {
            key: 'grid',
            title: 'Grid',
            url: '/antdesign/grid',
          },
        ],
      },
      {
        title: 'Navigation',
        key: 'navigation',
        children: [
          {
            key: 'affix',
            title: 'Affix',
            url: '/antdesign/affix',
          },
          {
            key: 'breadcrumb',
            title: 'Breadcrumb',
            url: '/antdesign/breadcrumb',
          },
          {
            key: 'dropdown',
            title: 'Dropdown',
            url: '/antdesign/dropdown',
          },
          {
            key: 'menu',
            title: 'Menu',
            url: '/antdesign/menu',
          },
          {
            key: 'pagination',
            title: 'Pagination',
            url: '/antdesign/pagination',
          },
          {
            key: 'steps',
            title: 'Steps',
            url: '/antdesign/steps',
          },
        ],
      },
      {
        title: 'Data Entry',
        key: 'dataEntry',
        children: [
          {
            key: 'autoComplete',
            title: 'Auto Complete',
            url: '/antdesign/autocomplete',
          },
          {
            key: 'cascader',
            title: 'Cascader',
            url: '/antdesign/cascader',
          },
          {
            key: 'checkbox',
            title: 'Checkbox',
            url: '/antdesign/checkbox',
          },
          {
            key: 'datePicker',
            title: 'Date Picker',
            url: '/antdesign/datepicker',
          },
          {
            key: 'form',
            title: 'Form',
            url: '/antdesign/form',
          },
          {
            key: 'input',
            title: 'Input',
            url: '/antdesign/input',
          },
          {
            key: 'inputNumber',
            title: 'Input Number',
            url: '/antdesign/inputnumber',
          },
          {
            key: 'mention',
            title: 'Mention',
            url: '/antdesign/mention',
          },
          {
            key: 'rate',
            title: 'Rate',
            url: '/antdesign/rate',
          },
          {
            key: 'radio',
            title: 'Radio',
            url: '/antdesign/radio',
          },
          {
            key: 'select',
            title: 'Select',
            url: '/antdesign/select',
          },
          {
            key: 'slider',
            title: 'Slider',
            url: '/antdesign/slider',
          },
          {
            key: 'switch',
            title: 'Switch',
            url: '/antdesign/switch',
          },
          {
            key: 'treeSelect',
            title: 'Tree Select',
            url: '/antdesign/treeselect',
          },
          {
            key: 'timePicker',
            title: 'Time Picker',
            url: '/antdesign/timepicker',
          },
          {
            key: 'transfer',
            title: 'Transfer',
            url: '/antdesign/transfer',
          },
          {
            key: 'upload',
            title: 'Upload',
            url: '/antdesign/upload',
          },
        ],
      },
      {
        title: 'Data Display',
        key: 'dataDisplay',
        children: [
          {
            key: 'avatar',
            title: 'Avatar',
            url: '/antdesign/avatar',
          },
          {
            key: 'badge',
            title: 'Badge',
            url: '/antdesign/badge',
          },
          {
            key: 'calendar',
            title: 'Calendar',
            url: '/antdesign/calendar',
          },
          {
            key: 'card',
            title: 'Card',
            url: '/antdesign/card',
          },
          {
            key: 'carousel',
            title: 'Carousel',
            url: '/antdesign/carousel',
          },
          {
            key: 'collapse',
            title: 'Collapse',
            url: '/antdesign/collapse',
          },
          {
            key: 'list',
            title: 'List',
            url: '/antdesign/list',
          },
          {
            key: 'popover',
            title: 'Popover',
            url: '/antdesign/popover',
          },
          {
            key: 'tooltip',
            title: 'Tooltip',
            url: '/antdesign/tooltip',
          },
          {
            key: 'table',
            title: 'Table',
            url: '/antdesign/table',
          },
          {
            key: 'tabs',
            title: 'Tabs',
            url: '/antdesign/tabs',
          },
          {
            key: 'tag',
            title: 'Tag',
            url: '/antdesign/tag',
          },
          {
            key: 'timeline',
            title: 'Timeline',
            url: '/antdesign/timeline',
          },
          {
            key: 'tree',
            title: 'Tree',
            url: '/antdesign/tree',
          },
        ],
      },
      {
        title: 'Feedback',
        key: 'feedback',
        children: [
          {
            key: 'alert',
            title: 'Alert',
            url: '/antdesign/alert',
          },
          {
            key: 'modal',
            title: 'Modal',
            url: '/antdesign/modal',
          },
          {
            key: 'message',
            title: 'Message',
            url: '/antdesign/message',
          },
          {
            key: 'notification',
            title: 'Notification',
            url: '/antdesign/notification',
          },
          {
            key: 'progress',
            title: 'Progress',
            url: '/antdesign/progress',
          },
          {
            key: 'spin',
            title: 'Spin',
            url: '/antdesign/spin',
          },
        ],
      },
      {
        title: 'Other',
        key: 'other',
        children: [
          {
            key: 'anchor',
            title: 'Anchor',
            url: '/antdesign/anchor',
          },
          {
            key: 'backTop',
            title: 'Back Top',
            url: '/antdesign/backtop',
          },
          {
            key: 'divider',
            title: 'Divider',
            url: '/antdesign/divider',
          },
          {
            key: 'localeProvider',
            title: 'Locale Provider',
            url: '/antdesign/localeprovider',
          },
        ],
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: 'Default Pages',
    key: 'defaultPages',
    icon: 'icomn icmn-file-text',
    children: [
      {
        key: 'loginAlpha',
        title: 'Login Alpha',
        url: '/pages/login-alpha',
      },
      {
        key: 'loginBeta',
        title: 'Login Beta',
        url: '/pages/login-beta',
      },
      {
        key: 'register',
        title: 'Register',
        url: '/pages/register',
      },
      {
        key: 'lockscreen',
        title: 'Lockscreen',
        url: '/pages/lockscreen',
      },
      {
        key: 'pricingTable',
        title: 'Pricing Table',
        url: '/pages/pricing-table',
      },
      {
        key: 'invoice',
        title: 'Invoice',
        url: '/pages/invoice',
      },
    ],
  },
  {
    title: 'Charts',
    key: 'charts',
    icon: 'icmn icmn-stats-bars',
    children: [
      {
        title: 'Chartist',
        key: 'chartist',
        url: '/charts/chartist',
      },
      {
        title: 'Chart',
        key: 'chart',
        url: '/charts/chart',
      },
      {
        title: 'Peity',
        key: 'peity',
        url: '/charts/peity',
      },
      {
        title: 'C3',
        key: 'c3',
        url: '/charts/c3',
      },
    ],
  },
  {
    title: 'Mail Templates',
    key: 'mailTemplates',
    url: '/layout/mail-templates',
    icon: 'icmn icmn-envelop',
  },
  {
    divider: true,
  },
  {
    title: 'Apps',
    key: 'apps',
    icon: 'icmn icmn-database',
    children: [
      {
        title: 'Messaging',
        key: 'messaging',
        url: '/apps/messaging',
      },
      {
        title: 'Mail',
        key: 'mail',
        url: '/apps/mail',
      },
      {
        title: 'Profile',
        key: 'profile',
        url: '/apps/profile',
      },
      {
        title: 'Gallery',
        key: 'gallery',
        url: '/apps/gallery',
      },
    ],
  },
  {
    title: 'Ecommerce',
    key: 'ecommerce',
    icon: 'icmn icmn-cart',
    children: [
      {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/ecommerce/dashboard',
      },
      {
        title: 'Products Catalog',
        key: 'productsCatalog',
        url: '/ecommerce/products-catalog',
      },
      {
        title: 'Products Details',
        key: 'productsDetails',
        url: '/ecommerce/product-details',
      },
      {
        title: 'Products Edit',
        key: 'productsEdit',
        url: '/ecommerce/product-edit',
      },
      {
        title: 'Products List',
        key: 'productsList',
        url: '/ecommerce/products-list',
      },
      {
        title: 'Orders',
        key: 'orders',
        url: '/ecommerce/orders',
      },
      {
        title: 'Cart',
        key: 'cart',
        url: '/ecommerce/cart',
      },
    ],
  },
  {
    title: 'Blog',
    key: 'blog',
    icon: 'icmn icmn-wordpress',
    children: [
      {
        title: 'Feed',
        key: 'blogFeed',
        url: '/blog/feed',
      },
      {
        title: 'Post',
        key: 'blogPost',
        url: '/blog/post',
      },
      {
        title: 'Add Post',
        key: 'blogAddPost',
        url: '/blog/add-blog-post',
      },
    ],
  },
  {
    title: 'YouTube',
    key: 'youtube',
    icon: 'icmn icmn-youtube',
    children: [
      {
        title: 'Feed',
        key: 'youtubeFeed',
        url: '/youtube/feed',
      },
      {
        title: 'View',
        key: 'youtubeView',
        url: '/youtube/view',
      },
    ],
  },
  {
    title: 'GitHub',
    key: 'github',
    icon: 'icmn icmn-github',
    children: [
      {
        title: 'Explore',
        key: 'githubExplore',
        url: '/github/explore',
      },
      {
        title: 'Discuss',
        key: 'githubDiscuss',
        url: '/github/discuss',
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: 'Icons',
    key: 'icons',
    icon: 'icmn icmn-star-full',
    children: [
      {
        title: 'FontAwesome',
        key: 'fontAwesome',
        url: '/icons/fontawesome',
      },
      {
        title: 'Linear',
        key: 'linear',
        url: '/icons/linear',
      },
      {
        title: 'Icomoon',
        key: 'icoMoon',
        url: '/icons/icomoon',
      },
    ],
  },
  {
    title: 'Bootstrap',
    key: 'bootstrap',
    url: '/layout/bootstrap',
    icon: 'icmn icmn-html-five',
  },
  {
    title: 'Card',
    key: 'card',
    url: '/layout/card',
    icon: 'icmn icmn-stack',
  },
  {
    title: 'Typography',
    key: 'typography',
    url: '/layout/typography',
    icon: 'icmn icmn-font-size',
  },
  {
    title: 'Utilities',
    key: 'utilities',
    url: '/layout/utilities',
    icon: 'icmn icmn-magic-wand',
  },
  {
    divider: true,
  },
  {
    title: 'Nested Items',
    key: 'nestedItem1',
    disabled: true,
    icon: 'icmn icmn-arrow-down2',
    children: [
      {
        title: 'Nested Item 1-1',
        key: 'nestedItem1-1',
        children: [
          {
            title: 'Nested Item 1-1-1',
            key: 'nestedItem1-1',
          },
          {
            title: 'Nested Items 1-1-2',
            key: 'nestedItem1-2',
            disabled: true,
          },
        ],
      },
      {
        title: 'Nested Items 1-2',
        key: 'nestedItem1-2',
      },
    ],
  },
  {
    title: 'Disabled Item',
    key: 'disabledItem',
    disabled: true,
    icon: 'icmn icmn-cancel-circle',
  },
]

const mapStateToProps = (state, props) => ({
  layoutState: state.app.layoutState,
})

@connect(mapStateToProps)
@withRouter
class MenuSider extends React.Component {
  state = {
    menuCollapsed: this.props.layoutState.menuCollapsed,
    selectedKeys: '',
    openKeys: [''],
  }

  handleClick = e => {
    if (e.key === 'settings') {
      return
    }
    this.setState({
      selectedKeys: e.key,
    })
  }

  onOpenChange = openKeys => {
    this.setState({
      openKeys: openKeys,
    })
  }

  getPath(data, id, parents = []) {
    let items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        } else if (entry.url === id && this.state.selectedKeys === '') {
          return [entry].concat(parents)
        } else if (entry.key === id && this.state.selectedKeys !== '') {
          return [entry].concat(parents)
        } else if (entry.children) {
          let nested = this.getPath(entry.children, id, [entry].concat(parents))
          return nested ? nested : result
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : false
  }

  getActiveMenuItem = (props, items) => {
    let menuCollapsed = props.layoutState.menuCollapsed
    let selectedKeys = this.state.selectedKeys
    let url = props.location.pathname
    let [activeMenuItem, ...path] = this.getPath(items, !selectedKeys ? url : selectedKeys)

    if (menuCollapsed) {
      path = ['']
    }

    this.setState({
      selectedKeys: activeMenuItem ? activeMenuItem.key : '',
      openKeys: activeMenuItem ? path.map(entry => entry.key) : [],
      menuCollapsed,
    })
  }

  generateMenuPartitions(items) {
    return items.map((menuItem, index) => {
      if (menuItem.children) {
        let subMenuTitle = (
          <span className="menuSider__title-wrap" key={menuItem.key}>
            <span className="menuSider__item-title">{menuItem.title}</span>
            {menuItem.icon && <span className={menuItem.icon + ' menuSider__icon'} />}
          </span>
        )
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {this.generateMenuPartitions(menuItem.children)}
          </SubMenu>
        )
      }
      return this.generateMenuItem(menuItem)
    })
  }

  generateMenuItem(item) {
    const key = item.key
    const title = item.title
    const url = item.url
    const icon = item.icon
    const disabled = item.disabled
    const { dispatch } = this.props
    return item.divider ? (
      <Divider key={Math.random()} />
    ) : item.url ? (
      <Menu.Item key={key} disabled={disabled}>
        <Link
          to={url}
          onClick={
            this.props.isMobile
              ? () => {
                  dispatch(setLayoutState({ menuCollapsed: false }))
                }
              : undefined
          }
        >
          <span className="menuSider__item-title">{title}</span>
          {icon && <span className={icon + ' menuSider__icon'} />}
        </Link>
      </Menu.Item>
    ) : (
      <Menu.Item key={key} disabled={disabled}>
        <span className="menuSider__item-title">{title}</span>
        {icon && <span className={icon + ' menuSider__icon'} />}
      </Menu.Item>
    )
  }

  onCollapse = (collapsed, type) => {
    const { dispatch } = this.props
    if (type === 'responsive' && this.state.menuCollapsed) {
      return
    }
    dispatch(setLayoutState({ menuCollapsed: !this.state.menuCollapsed }))
  }

  componentDidMount() {
    this.getActiveMenuItem(this.props, menuData)
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isMobile) {
      this.getActiveMenuItem(newProps, menuData)
    }
  }

  render() {
    const { menuCollapsed, selectedKeys, openKeys } = this.state
    const { isMobile } = this.props
    const menuItems = this.generateMenuPartitions(menuData)
    const paramsMobile = {
      width: 256,
      collapsible: false,
      collapsed: false,
      onCollapse: this.onCollapse,
    }
    const paramsDesktop = {
      width: 256,
      collapsible: true,
      collapsed: menuCollapsed,
      onCollapse: this.onCollapse,
      breakpoint: 'lg',
    }
    const params = isMobile ? paramsMobile : paramsDesktop
    return (
      <Sider {...params}>
        <div className="menuSider__logo">
          {params.collapsed ? (
            <div className="menuSider__logoContainer menuSider__logoContainer--collapsed">
              <img src="resources/images/logo-inverse-mobile.png" alt="" />
            </div>
          ) : (
            <div className="menuSider__logoContainer">
              <img src="resources/images/logo-inverse.png" alt="" />
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[selectedKeys]}
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
          mode="inline"
          className="menuSider__navigation"
        >
          {/*
          <Menu.Item key={'settings'}>
            <span className="menuSider__item-title">Theme Settings</span>
            <span
              className={'icmn icmn-cog menuSider__icon utils__spin-delayed--pseudo-selector'}
            />
          </Menu.Item>
          */}
          {menuItems}
        </Menu>
      </Sider>
    )
  }
}

export { MenuSider, menuData }
