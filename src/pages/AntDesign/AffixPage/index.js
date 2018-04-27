import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AffixItems from 'components/AntDesign/Affix/index'

class AffixPage extends React.Component {
  static defaultProps = {
    pathName: 'Affix',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <AffixItems />
      </Page>
    )
  }
}

export default AffixPage
