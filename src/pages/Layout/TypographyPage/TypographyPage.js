import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import Typography from './Typography'

class TypographyPage extends React.Component {
  static defaultProps = {
    pathName: 'Typography',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Typography" />
        <Typography />
      </Page>
    )
  }
}

export default TypographyPage
