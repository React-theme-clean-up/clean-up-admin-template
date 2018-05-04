import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Switch, Layout } from 'antd'
import { Link, NavLink, withRouter } from 'react-router-dom'
import './style.css'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const mapStateToProps = (state, props) => ({})

const menuItems = [
  {
    title: 'Ant Components',
    key: 'antComponents',
    icon: 'icmn icmn-home',
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
  {
    title: 'Dashboard Alfa',
    key: 'dashboardAlfa',
    url: '/dashboard/alpha',
  },
  {
    title: 'Default Pages',
    key: 'defaultPages',
    icon: 'icomn icmn-home',
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
        url:  '/pages/invoice',
      },
      {
        key: 'livesearch',
        title: 'Livesearch',
        url: '/pages/livesearch',
      }
    ]
  },
  {
    title: 'Apps',
    key: 'apps',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Messaging',
        key: 'messaging',
        url: '/apps/messaging'
      },
      {
        title: 'Mail',
        key: 'mail',
        url: '/apps/mail'
      },
      {
        title: 'Profile',
        key: 'profile',
        url: '/apps/profile'
      },
      {
        title: 'Gallery',
        key: 'gallery',
        url: '/apps/gallery'
      },
    ]
  },
  {
    title: 'Ecommerce',
    key: 'ecommerce',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/ecommerce/dashboard'
      },
      {
        title: 'Products Catalog',
        key: 'productsCatalog',
        url: '/ecommerce/products-catalog'
      },
      {
        title: 'Products Details',
        key: 'productsDetails',
        url: '/ecommerce/product-details'
      },
      {
        title: 'Products Edit',
        key: 'productsEdit',
        url: '/ecommerce/product-edit'
      },
      {
        title: 'Products List',
        key: 'productsList',
        url: '/ecommerce/produscts-list'
      },
      {
        title: 'Orders',
        key: 'orders',
        url: '/ecommerce/orders'
      },
      {
        title: 'Cart',
        key: 'cart',
        url: '/ecommerce/cart'
      }
    ]
  },
  {
    title: 'Icons',
    key: 'icons',
    icon: 'icmn icmn-home',
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
      }
    ]
  },
  {
    title: 'Layout',
    key: 'layout',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Bootstrap',
        key: 'bootstrap',
        url: '/layout/bootstrap'
      },
      {
        title: 'Card',
        key: 'card',
        url: '/layout/card'
      },
      {
        title: 'Utilities',
        key: 'utilities',
        url: '/layout/utilities'
      },
      {
        title: 'Typography',
        key: 'typography',
        url: '/layout/typography'
      },
      {
        title: 'Mail Templates',
        key: 'mailTemplates',
        url: '/layout/mail-templates'
      },
    ]
  },
  {
    title: 'Charts',
    key: 'charts',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Chartist',
        key: 'chartist',
        url: '/charts/chartist'
      },
      {
        title: 'Chart',
        key: 'chart',
        url: '/charts/chart',
      },
      {
        title: 'Piety',
        key: 'piety',
        url: '/charts/piety'
      },
      {
        title: 'C3',
        key: 'c3',
        url: '/charts/c3'
      },
    ]
  },
  {
    title: 'Blog',
    key: 'blog',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Feed',
        key: 'blogFeed',
        url: '/blog/feed'
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
      }
    ]
  },
  {
    title: 'YouTube',
    key: 'youtube',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Feed',
        key: 'youtubeFeed',
        url: '/youtube/feed'
      },
      {
        title: 'View',
        key: 'youtubeView',
        url: '/youtube/view',
      },
    ]
  },
  {
    title: 'GitHub',
    key: 'github',
    icon: 'icmn icmn-home',
    children: [
      {
        title: 'Explore',
        key: 'githubExplore',
        url: '/github/explore'
      },
      {
        title: 'Discuss',
        key: 'githubDiscuss',
        url: '/github/discuss'
      },
    ]
  }
]

@connect(mapStateToProps)
class Navigation extends React.Component {
  state = {
    theme: 'dark',
    collapsed: false,
    current: '',
    opened: [''],
  }
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }
  changeCollapsed = value => {
    this.setState({
      collapsed: !!value,
      opened: [''],
    })
  }
  handleClick = e => {
    this.setState({
      current: e.key,
    })
  }
  onOpenChange = openKeys => {
    this.setState({
      opened: openKeys,
    })
  }

  getActiveMenuItem = props => {
    let url = props.location.pathname
    let activeMenuItem = ''
    let opened = []
    menuItems.forEach(menuItem => {
      if (menuItem.children) {
        let menuItemKey = menuItem.key
        menuItem.children.forEach(innerMenuItem => {
          if (innerMenuItem.url === url) {
            activeMenuItem = innerMenuItem.key
            opened.push(menuItemKey)
          }
        })
      }
      if (menuItem.url !== undefined && menuItem.url === url) {
        activeMenuItem = menuItem.key
      }
    })

    this.setState({
      current: activeMenuItem,
      opened: opened,
    })
  }

  getMenuItems() {
    return menuItems.map(menuItem => {
      if (menuItem.children) {
        let subMenuTitle = (
          <span className="appMenu__title-wrap">
            <span className="appMenu__item-title">
              {menuItem.title}
            </span>
            <span className={menuItem.icon + ' appMenu__icon'} />
          </span>
        )
        return (
          <SubMenu title={subMenuTitle} key={menuItem.key}>
            {menuItem.children.map(child => {
              return this.generateMenuItem(child)
            })}
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
    const child = (
      <Link to={url}>
        {title}
      </Link>
    )

    return (
      <Menu.Item key={key}>
        {child}
      </Menu.Item>
    )
  }

  componentDidMount() {
    this.getActiveMenuItem(this.props)
  }

  render() {
    const { theme, collapsed, current, opened } = this.state
    const menuItems = this.getMenuItems()
    return (
      <Sider width={256} collapsed={collapsed}>
        <div className="appMenu__logo" />
        <Menu
          theme={theme}
          onClick={this.handleClick}
          selectedKeys={[current]}
          openKeys={opened}
          onOpenChange={this.onOpenChange}
          mode="inline"
          className="appMenu__navigation"
        >
          {menuItems}
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

const AppMenu = withRouter(Navigation)

export default AppMenu
