import React from 'react'
import Page from 'components/Page'
import Helmet from 'react-helmet'
import AutocomplitePageItems from 'components/AntDesign/AutocompletePage/index'

class AutocompletePage extends React.Component {
  static defaultProps = {
    pathName: 'AutoComplete',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - AutoComplete" />
        <AutocomplitePageItems />
      </Page>
    )
  }
}

export default AutocompletePage
