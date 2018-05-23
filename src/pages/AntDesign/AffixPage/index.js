import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import AffixItems from 'components/AntComponents/Affix/index'

class AffixPage extends React.Component {
  static defaultProps = {
    pathName: 'Affix',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Affix" />
        <AffixItems />
      </Page>
    )
  }
}

export default AffixPage
