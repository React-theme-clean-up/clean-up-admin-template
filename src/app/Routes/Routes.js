import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'app/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import HomePage from 'pages/DefaultPages/HomePage'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // Default Pages
  '/login': {
    component: loadable(() => import('pages/DefaultPages/LoginPage')),
  },
  '/pages/login-alpha': {
    component: loadable(() => import('pages/DefaultPages/LoginAlphaPage')),
  },
  '/pages/login-beta': {
    component: loadable(() => import('pages/DefaultPages/LoginBetaPage')),
  },
  '/pages/register': {
    component: loadable(() => import('pages/DefaultPages/RegisterPage')),
  },
  '/pages/lockscreen': {
    component: loadable(() => import('pages/DefaultPages/LockscreenPage')),
  },
  '/pages/pricing-table': {
    component: loadable(() => import('pages/DefaultPages/PricingTablePage')),
  },
  '/pages/invoice': {
    component: loadable(() => import('pages/DefaultPages/InvoicePage')),
  },
  '/pages/livesearch': {
    component: loadable(() => import('pages/DefaultPages/LiveSearch/LiveSearchPage')),
  },

  // Dashboards
  '/dashboard/alpha': {
    component: loadable(() => import('pages/Dashboard/DashboardAlphaPage')),
  },

  // Apps
  '/apps/messaging': {
    component: loadable(() => import('pages/Apps/MessagingAppPage')),
  },
  '/apps/mail': {
    component: loadable(() => import('pages/Apps/MailAppPage')),
  },
  '/apps/profile': {
    component: loadable(() => import('pages/Apps/ProfileAppPage')),
  },
  '/apps/gallery': {
    component: loadable(() => import('pages/Apps/GalleryAppPage')),
  },

  // Ecommerce
  '/ecommerce/dashboard': {
    component: loadable(() => import('pages/Ecommerce/DashboardPage')),
  },
  '/ecommerce/products-catalog': {
    component: loadable(() => import('pages/Ecommerce/ProductsCatalogPage')),
  },
  '/ecommerce/product-details': {
    component: loadable(() => import('pages/Ecommerce/ProductDetailsPage')),
  },
  '/ecommerce/product-edit': {
    component: loadable(() => import('pages/Ecommerce/ProductEditPage')),
  },
  '/ecommerce/products-list': {
    component: loadable(() => import('pages/Ecommerce/ProductsListPage')),
  },
  '/ecommerce/orders': {
    component: loadable(() => import('pages/Ecommerce/OrdersPage')),
  },
  '/ecommerce/cart': {
    component: loadable(() => import('pages/Ecommerce/CartPage')),
  },

  // Icons
  '/icons/fontawesome': {
    component: loadable(() => import('pages/Icons/FontAwesomeIconsPage')),
  },
  '/icons/linear': {
    component: loadable(() => import('pages/Icons/LinearIconsPage')),
  },
  '/icons/icomoon': {
    component: loadable(() => import('pages/Icons/IcomoonIconsPage')),
  },

  // Layout
  '/layout/bootstrap': {
    component: loadable(() => import('pages/Layout/GridBootstrapPage')),
  },
  '/layout/card': {
    component: loadable(() => import('pages/Layout/GridCardPage')),
  },
  '/layout/utilities': {
    component: loadable(() => import('pages/Layout/UtilitiesPage')),
  },
  '/layout/typography': {
    component: loadable(() => import('pages/Layout/TypographyPage')),
  },
  '/layout/mail-templates': {
    component: loadable(() => import('pages/Layout/MailTemplatesPage')),
  },

  // Charts
  // '/charts': {
  //   component: loadable(() => import('pages/ChartistPage')),
  // },

  // Blog
  '/blog/feed': {
    component: loadable(() => import('pages/Blog/BlogFeed/BlogFeedPage')),
  },
  '/blog/post': {
    component: loadable(() => import('pages/Blog/BlogPost/BlogPostPage')),
  },
  '/blog/add-blog-post': {
    component: loadable(() => import('pages/Blog/AddBlogPost/AddBlogPostPage')),
  },

  //YouTube
  '/youtube/feed': {
    component: loadable(() => import('pages/YouTube/YouTubeFeed/YouTubeFeedPage')),
  },
  '/youtube/view': {
    component: loadable(() => import('pages/YouTube/YouTubeView/YouTubeViewPage')),
  },

  //GitHub
  '/github/explore': {
    component: loadable(() => import('pages/GitHub/GitHubExplore/GitHubExplorePage')),
  },
  '/github/discuss': {
    component: loadable(() => import('pages/GitHub/GitHubDiscuss/GitHubDiscussPage')),
  },

  // AntDesign
  '/antdesign/button': {
    component: loadable(() => import('pages/AntDesign/ButtonPage')),
  },
  '/antdesign/grid': {
    component: loadable(() => import('pages/AntDesign/GridPage')),
  },
  '/antdesign/affix': {
    component: loadable(() => import('pages/AntDesign/AffixPage')),
  },
  '/antdesign/dropdown': {
    component: loadable(() => import('pages/AntDesign/DropdownPage')),
  },
  '/antdesign/menu': {
    component: loadable(() => import('pages/AntDesign/MenuPage')),
  },
  '/antdesign/pagination': {
    component: loadable(() => import('pages/AntDesign/PaginationPage')),
  },
  '/antdesign/steps': {
    component: loadable(() => import('pages/AntDesign/StepsPage')),
  },
  '/antdesign/autocomplete': {
    component: loadable(() => import('pages/AntDesign/AutocompletePage')),
  },
  '/antdesign/cascader': {
    component: loadable(() => import('pages/AntDesign/CascaderPage')),
  },
  '/antdesign/datepicker': {
    component: loadable(() => import('pages/AntDesign/DatepickerPage')),
  },
  '/antdesign/form': {
    component: loadable(() => import('pages/AntDesign/FormPage')),
  },
  '/antdesign/input': {
    component: loadable(() => import('pages/AntDesign/InputPage')),
  },
  '/antdesign/inputnumber': {
    component: loadable(() => import('pages/AntDesign/InputnumberPage')),
  },
  '/antdesign/mention': {
    component: loadable(() => import('pages/AntDesign/MentionPage')),
  },
  '/antdesign/rate': {
    component: loadable(() => import('pages/AntDesign/RatePage')),
  },
  '/antdesign/radio': {
    component: loadable(() => import('pages/AntDesign/RadioPage')),
  },
  '/antdesign/select': {
    component: loadable(() => import('pages/AntDesign/SelectPage')),
  },
  '/antdesign/slider': {
    component: loadable(() => import('pages/AntDesign/SliderPage')),
  },
  '/antdesign/switch': {
    component: loadable(() => import('pages/AntDesign/SwitchPage')),
  },
  '/antdesign/treeselect': {
    component: loadable(() => import('pages/AntDesign/TreeSelectPage')),
  },
  '/antdesign/timepicker': {
    component: loadable(() => import('pages/AntDesign/TimepickerPage')),
  },
  '/antdesign/transfer': {
    component: loadable(() => import('pages/AntDesign/TransferPage')),
  },
  '/antdesign/upload': {
    component: loadable(() => import('pages/AntDesign/UploadPage')),
  },
  '/antdesign/avatar': {
    component: loadable(() => import('pages/AntDesign/AvatarPage')),
  },
  '/antdesign/badge': {
    component: loadable(() => import('pages/AntDesign/BadgePage')),
  },
  '/antdesign/calendar': {
    component: loadable(() => import('pages/AntDesign/CalendarPage')),
  },
  '/antdesign/card': {
    component: loadable(() => import('pages/AntDesign/CardPage')),
  },
  '/antdesign/carousel': {
    component: loadable(() => import('pages/AntDesign/CarouselPage')),
  },
  '/antdesign/checkbox': {
    component: loadable(() => import('pages/AntDesign/CheckboxPage')),
  },
  '/antdesign/collapse': {
    component: loadable(() => import('pages/AntDesign/CollapsePage')),
  },
  '/antdesign/list': {
    component: loadable(() => import('pages/AntDesign/ListPage')),
  },
  '/antdesign/popover': {
    component: loadable(() => import('pages/AntDesign/PopoverPage')),
  },
  '/antdesign/tooltip': {
    component: loadable(() => import('pages/AntDesign/TooltipPage')),
  },
  '/antdesign/table': {
    component: loadable(() => import('pages/AntDesign/TablePage')),
  },
  '/antdesign/tabs': {
    component: loadable(() => import('pages/AntDesign/TabsPage')),
  },
  '/antdesign/tag': {
    component: loadable(() => import('pages/AntDesign/TagPage')),
  },
  '/antdesign/timeline': {
    component: loadable(() => import('pages/AntDesign/TimelinePage')),
  },
  '/antdesign/tree': {
    component: loadable(() => import('pages/AntDesign/TreePage')),
  },
  '/antdesign/alert': {
    component: loadable(() => import('pages/AntDesign/AlertPage')),
  },
  '/antdesign/modal': {
    component: loadable(() => import('pages/AntDesign/ModalPage')),
  },
  '/antdesign/message': {
    component: loadable(() => import('pages/AntDesign/MessagePage')),
  },
  '/antdesign/notification': {
    component: loadable(() => import('pages/AntDesign/NotificationPage')),
  },
  '/antdesign/progress': {
    component: loadable(() => import('pages/AntDesign/ProgressPage')),
  },
  '/antdesign/popconfirm': {
    component: loadable(() => import('pages/AntDesign/PopconfirmPage')),
  },
  '/antdesign/spin': {
    component: loadable(() => import('pages/AntDesign/SpinPage')),
  },
  '/antdesign/anchor': {
    component: loadable(() => import('pages/AntDesign/AnchorPage')),
  },
  '/antdesign/backtop': {
    component: loadable(() => import('pages/AntDesign/BacktopPage')),
  },
  '/antdesign/divider': {
    component: loadable(() => import('pages/AntDesign/DividerPage')),
  },
  '/antdesign/localeprovider': {
    component: loadable(() => import('pages/AntDesign/LocaleproviderPage')),
  },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // load after 5 sec
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <ConnectedSwitch>
        <Route exact path="/" component={HomePage} />
        {Object.keys(loadableRoutes).map(path => {
          const { exact, ...props } = loadableRoutes[path]
          props.exact = exact === void 0 || exact || false // set true as default
          return <Route key={path} path={path} {...props} />
        })}
        <Route
          render={() =>
            <Page>
              <NotFoundPage />
            </Page>}
        />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes
