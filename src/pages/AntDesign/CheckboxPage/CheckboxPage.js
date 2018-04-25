// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import CheckboxPageItems from 'components/AntComponents/CheckboxPage/index'

class CheckboxPage extends React.Component {
  static defaultProps = {
    pathName: 'Checkbox',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Checkbox" />
        <CheckboxPageItems />
      </Page>
    )
  }
}

export default CheckboxPage
