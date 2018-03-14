// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-redux-spinner'
import { BackTop } from 'antd'
import Routes from './Page_Routes'
import MenuLeft from './Page_MenuLeft'
import TopBar from './Page_TopBar'
import Content from './Page_Content'
import BodyClass from './Page_BodyClass'
import HideLogin from './Page_HideLogin'
import Footer from './Page_Footer'

let contentBuffer = {
  pathName: null,
  content: null,
}

class Layout extends React.Component {
  static childContextTypes = {
    getContentBuffer: PropTypes.func,
    setContentBuffer: PropTypes.func,
  }

  getChildContext() {
    return {
      getContentBuffer: () => contentBuffer,
      // $FlowFixMe
      setContentBuffer: ({ pathName, content }) => (contentBuffer = { pathName, content }),
    }
  }

  render() {
    return (
      <div>
        <BodyClass />
        <Spinner />
        <BackTop />
        <Routes />
        <MenuLeft />
        <TopBar />
        <Content />
        <Footer />
        <HideLogin />
      </div>
    )
  }
}

export default Layout
