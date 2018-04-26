import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-redux-spinner'
import { BackTop, Layout as AntLayout } from 'antd'
import Routes from 'routes'
import Header from 'components/Clean/Header'
import Footer from 'components/Clean/Footer'
import Menu from 'components/Clean/Menu'
import Content from 'components/Page/Content'

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
        <Menu />
        <AntLayout>
          <AntHeader>
            <Header />
          </AntHeader>
          <AntContent style={{ height: '100%' }}>
            <Content />
          </AntContent>
          <AntFooter>
            <Footer />
          </AntFooter>
        </AntLayout>
      </AntLayout>
    )
  }
}

export default Layout
