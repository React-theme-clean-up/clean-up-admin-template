import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import AutocompleteItems from 'components/AntComponents/Autocomplete/index'

class AutocompletePage extends React.Component {
  static defaultProps = {
    pathName: 'AutoComplete',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="AutoComplete" />
        <AutocompleteItems />
      </Page>
    )
  }
}

export default AutocompletePage
