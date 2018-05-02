import React from 'react'
import Page from 'components/Page'
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
            <h5 className="mb-0 mr-3 d-inline-block text-black">
              <strong>LiveSearch</strong>
            </h5>
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
