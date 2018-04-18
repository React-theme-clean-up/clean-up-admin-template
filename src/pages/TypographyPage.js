import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import Typography from 'components/Pages/Typography/Typography'

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