// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import LiveSearch from './LiveSearch'

class BlogFeedPage extends React.Component {
  static defaultProps = {
    pathName: 'LiveSearch',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - LiveSearch" />
        <LiveSearch />
        <section className="card">
          <div className="card-header mb-2">
            <div className="cat__core__title">
              <strong>LiveSearch</strong>
            </div>
          </div>
          <div className="card-block">
            <div className="add-post">
              <div className="container">
                <img
                  src="resources/images/photos/1.jpeg"
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>
      </Page>
    )
  }
}

export default BlogFeedPage
