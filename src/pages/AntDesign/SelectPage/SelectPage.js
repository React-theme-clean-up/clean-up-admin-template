// @flow
import React from 'react'
import Page from 'app/Page/Page'
import Helmet from 'react-helmet'
import SelectPageItems from 'components/AntComponents/SelectPage/index'

class SelectPage extends React.Component {
  static defaultProps = {
    pathName: 'Button',
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Clean UI - Buttons" />
        <SelectPageItems />
      </Page>
    )
  }
}

export default SelectPage
