import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from './Page'
import NotFound from './Page_NotFound'
import HomePage from 'pages/HomePage'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // BASE ROUTES
  '/login': {
    component: loadable(() => import('pages/LoginPage')),
  },
  '/dashboard': {
    component: loadable(() => import('pages/DashboardPage')),
  },
  '/buttonpage': {
    component: loadable(() => import('pages/ButtonPage')),
  },
  '/gridpage': {
    component: loadable(() => import('pages/GridPage')),
  },
  '/affixpage': {
    component: loadable(() => import('pages/AffixPage')),
  },
  // '/breadcrumbpage': {
  //   component: loadable(() => import('pages/BreadcrumbPage')),
  // },
  '/dropdownpage': {
    component: loadable(() => import('pages/DropdownPage')),
  },
  '/menupage': {
    component: loadable(() => import('pages/MenuPage')),
  },
  '/paginationpage': {
    component: loadable(() => import('pages/PaginationPage')),
  },
  '/stepspage': {
    component: loadable(() => import('pages/StepsPage')),
  },
  '/autocompletepage': {
    component: loadable(() => import('pages/AutocompletePage')),
  },
  '/cascaderpage': {
    component: loadable(() => import('pages/CascaderPage')),
  },
  '/datepickerpage': {
    component: loadable(() => import('pages/DatepickerPage')),
  },
  '/formpage': {
    component: loadable(() => import('pages/FormPage')),
  },
  '/inputpage': {
    component: loadable(() => import('pages/InputPage')),
  },
  '/inputnumberpage': {
    component: loadable(() => import('pages/InputnumberPage')),
  },
  '/mentionpage': {
    component: loadable(() => import('pages/MentionPage')),
  },
  '/ratepage': {
    component: loadable(() => import('pages/RatePage')),
  },
  '/radiopage': {
    component: loadable(() => import('pages/RadioPage')),
  },
  '/selectpage': {
    component: loadable(() => import('pages/SelectPage')),
  },
  '/sliderpage': {
    component: loadable(() => import('pages/SliderPage')),
  },
  '/switchpage': {
    component: loadable(() => import('pages/SwitchPage')),
  },
  '/treeselectpage': {
    component: loadable(() => import('pages/TreeselectPage')),
  },
  '/timepickerpage': {
    component: loadable(() => import('pages/TimepickerPage')),
  },
  '/transferpage': {
    component: loadable(() => import('pages/TransferPage')),
  },
  '/uploadpage': {
    component: loadable(() => import('pages/UploadPage')),
  },
  '/avatarpage': {
    component: loadable(() => import('pages/AvatarPage')),
  },
  '/badgepage': {
    component: loadable(() => import('pages/BadgePage')),
  },
  '/calendarpage': {
    component: loadable(() => import('pages/CalendarPage')),
  },
  '/cardpage': {
    component: loadable(() => import('pages/CardPage')),
  },
  '/carouselpage': {
    component: loadable(() => import('pages/CarouselPage')),
  },
  '/collapsepage': {
    component: loadable(() => import('pages/CollapsePage')),
  },
  '/listpage': {
    component: loadable(() => import('pages/ListPage')),
  },
  '/popoverpage': {
    component: loadable(() => import('pages/PopoverPage')),
  },
  '/tooltippage': {
    component: loadable(() => import('pages/TooltipPage')),
  },
  '/tablepage': {
    component: loadable(() => import('pages/TablePage')),
  },
  '/tabspage': {
    component: loadable(() => import('pages/TabsPage')),
  },
  '/tagpage': {
    component: loadable(() => import('pages/TagPage')),
  },
  '/timelinepage': {
    component: loadable(() => import('pages/TimelinePage')),
  },
  '/treepage': {
    component: loadable(() => import('pages/TreePage')),
  },
  '/alertpage': {
    component: loadable(() => import('pages/AlertPage')),
  },
  '/modalpage': {
    component: loadable(() => import('pages/ModalPage')),
  },
  '/messagepage': {
    component: loadable(() => import('pages/MessagePage')),
  },
  '/notificationpage': {
    component: loadable(() => import('pages/NotificationPage')),
  },
  '/progresspage': {
    component: loadable(() => import('pages/ProgressPage')),
  },
  '/popconfirmpage': {
    component: loadable(() => import('pages/PopconfirmPage')),
  },
  '/spinpage': {
    component: loadable(() => import('pages/SpinPage')),
  },
  '/anchorpage': {
    component: loadable(() => import('pages/AnchorPage')),
  },
  '/backtoppage': {
    component: loadable(() => import('pages/BacktopPage')),
  },
  '/dividerpage': {
    component: loadable(() => import('pages/DividerPage')),
  },
  '/localeproviderpage': {
    component: loadable(() => import('pages/LocaleproviderPage')),
  },
  '/loginalpha': {
    component: loadable(() => import('pages/LoginAlphaPage')),
  },
  '/loginbeta': {
    component: loadable(() => import('pages/LoginBetaPage')),
  },
  '/registerpage': {
    component: loadable(() => import('pages/RegisterPage')),
  },
  '/lockscreenpage': {
    component: loadable(() => import('pages/LockscreenPage')),
  },
  '/pricingtablepage': {
    component: loadable(() => import('pages/PricingtablePage')),
  },
  '/invoicepage': {
    component: loadable(() => import('pages/InvoicePage')),
  },
  '/ecommercedashboardpage': {
    component: loadable(() => import('pages/EcommerceDashboardPage')),
  },
  '/productscatalogpage': {
    component: loadable(() => import('pages/ProductsCatalogPage')),
  },
  '/productdetailspage': {
    component: loadable(() => import('pages/ProductDetailsPage')),
  },
  '/producteditpage': {
    component: loadable(() => import('pages/ProductEditPage')),
  },
  '/productslistpage': {
    component: loadable(() => import('pages/ProductsListPage')),
  },
  '/orderspage': {
    component: loadable(() => import('pages/OrdersPage')),
  },
  '/cartpage': {
    component: loadable(() => import('pages/CartPage')),
  },
  '/chartistpage': {
    component: loadable(() => import('pages/ChartistPage')),
  },
  '/mailtemplatespage': {
    component: loadable(() => import('pages/MailTemplatesPage')),
  },
  '/messagingapppage': {
    component: loadable(() => import('pages/MessagingAppPage')),
  },
  '/mailapppage': {
    component: loadable(() => import('pages/MailAppPage')),
  },
  '/profilepage': {
    component: loadable(() => import('pages/ProfilePage')),
  },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // загружаю после статистики Google
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
          // $FlowFixMe
          const { exact, ...props } = loadableRoutes[path]
          props.exact = exact === void 0 || exact || false // set true as default
          return <Route key={path} path={path} {...props} />
        })}
        <Route
          render={() =>
            <Page>
              <NotFound />
            </Page>}
        />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes

// // @flow
// import React from 'react'
// import { Route } from 'react-router-dom'
// import { ConnectedSwitch } from 'reactRouterConnected'
// import Loadable from 'react-loadable'
// import Page from './Page'
// import NotFound from './Page_NotFound'
// import HomePage from 'pages/HomePage'
//
// const loadable = loader =>
//   Loadable({
//     loader,
//     delay: false,
//     loading: () => null,
//   })
//
// const loadableRoutes = {
//   '/login': {
//     component: loadable(() => import('pages/LoginPage')),
//   },
//   '/dashboard': {
//     component: loadable(() => import('pages/DashboardPage')),
//   },
//   '/olo': {
//     component: loadable(() => import('pages/DashboardPage')),
//   },
// }
//
// class Routes extends React.Component {
//   timeoutId = null
//
//   componentDidMount() {
//     this.timeoutId = setTimeout(
//       () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
//       5000, // загружаю после статистики Google
//     )
//   }
//
//   componentWillUnmount() {
//     if (this.timeoutId) {
//       clearTimeout(this.timeoutId)
//     }
//   }
//
//   render() {
//     console.log('hohoohohoh')
//     return (
//       <ConnectedSwitch>
//         <Route exact path="/" component={HomePage} />
//         {Object.keys(loadableRoutes).map(path => {
//           // $FlowFixMe
//           const { exact, ...props } = loadableRoutes[path]
//           // props.exact = exact === void 0 || exact || false // set true as default
//           return <Route key={path} path={path} {...props} />
//         })}
//         <Route
//           render={() =>
//             <Page>
//               <NotFound />
//             </Page>}
//         />
//       </ConnectedSwitch>
//     )
//   }
// }
//
// export { loadableRoutes }
// export default Routes
