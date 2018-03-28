// @flow
import React from 'react'
import Page from 'components/Pages/Page'
import Helmet from 'react-helmet'
import AffixPageItems from 'components/AntComponents/AffixPage/index'

class AffixPage extends React.Component {
  static defaultProps = {
    pathName: 'Affix',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <AffixPageItems />
      </Page>
    )
  }
}

export default AffixPage
