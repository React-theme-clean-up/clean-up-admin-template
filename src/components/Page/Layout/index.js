import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-redux-spinner'
import { BackTop, Layout as AntLayout } from 'antd'
import Routes from 'routes'
import TopBar from 'components/Page/TopBar'
import Footer from 'components/Page/Footer'
import { AppMenu } from 'components/Page/Menu'
import Content from 'components/Page/Content'
import Loader from 'components/Page/Loader'

const AntContent = AntLayout.Content
const AntHeader = AntLayout.Header
const AntFooter = AntLayout.Footer

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
      setContentBuffer: ({ pathName, content }) => (contentBuffer = { pathName, content }),
    }
  }

  render() {
    return (
      <AntLayout>
        <Spinner />
        <BackTop />
        <Routes />
        <AppMenu />
        <AntLayout>
          <AntHeader>
            <TopBar />
          </AntHeader>
          <AntContent style={{ height: '100%' }}>
            <Content />
          </AntContent>
          <AntFooter>
            <Footer />
          </AntFooter>
        </AntLayout>
        <Loader />
      </AntLayout>
    )
  }
}

export default Layout
