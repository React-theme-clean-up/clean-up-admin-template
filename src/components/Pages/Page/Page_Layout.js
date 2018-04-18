import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-redux-spinner'
import { BackTop } from 'antd'
import Routes from './Page_Routes'
import AppHeader from 'components/CleanComponents/AppHeader/AppHeader'
import AppFooter from 'components/CleanComponents/AppFooter/AppFooter'
import AppMenu from 'components/CleanComponents/AppMenu/AppMenu'
import AppContent from './Page_Content'
import { Layout } from 'antd'

const { Content, Header, Footer } = Layout

let contentBuffer = {
  pathName: null,
  content: null,
}

class AppLayout extends React.Component {
  static childContextTypes = {
    getContentBuffer: PropTypes.func,
    setContentBuffer: PropTypes.func,
  }

  getChildContext() {
    return {
      getContentBuffer: () => contentBuffer,
      setContentBuffer: ({ pathName, content }) => (contentBuffer = { pathName, content }),
    }
  }

  render() {
    return (
      <Layout>
        <Spinner />
        <BackTop />
        <Routes />
        <AppMenu />
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content style={{ height: '100%' }}>
            <AppContent />
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout
